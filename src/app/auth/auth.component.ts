import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterResponseModel, LoginResponseModel } from './models/response-models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  @ViewChild('signUpForm') signUpForm: NgForm;
  isLogin: boolean = true;
  isLoading: boolean = false;
  error: string;

  private bowObservable: Observable<RegisterResponseModel | LoginResponseModel>;

  constructor(private authService: AuthService, private route: Router) { }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  submitForm() {
    this.isLoading = true;
    if (!this.isLogin) {
      this.bowObservable = this.authService.registerUser(this.signUpForm.value);
    } else {
      this.bowObservable = this.authService.logIn(this.signUpForm.value);
    }

    this.bowObservable.subscribe(data => {
      setTimeout(() => {
        this.isLoading = false;
        this.error = '';
        this.route.navigate(['/bio-organic-weapons']);
      }, 2000);
    }, error => {
      this.error = error;
      this.isLoading = false;
    });
    this.signUpForm.reset();
  }

  confirmError(ack: boolean) {
    if (ack) {
      this.error = null;
    }
  }
}
