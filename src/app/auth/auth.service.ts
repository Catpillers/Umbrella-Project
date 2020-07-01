import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterResponseModel, LoginResponseModel } from './models/response-models';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user = new BehaviorSubject<User>(null);
    private expirationTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    registerUser(userData: { username: string, password: string }) {
        return this.http.post<RegisterResponseModel>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
        + environment.firebaseAPIKey,
            {
                email: userData.username.replace(/\s/g, '') + '@gmail.com',
                password: userData.password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.errorHandler), tap(this.authHendler));
    }

    logIn(userData: { username: string, password: string }) {
        return this.http.post<LoginResponseModel>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
        + environment.firebaseAPIKey,
            {
                email: userData.username.replace(/\s/g, '') + '@gmail.com',
                password: userData.password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.errorHandler), tap((data) => {
            this.authHendler(data);
        }));
    }

    logOut() {
        this.user.next(null);
        localStorage.removeItem('userData');
        if (this.expirationTimer) {
            clearTimeout(this.expirationTimer);
        }
        this.expirationTimer = null;
        this.router.navigate(['/authentication']);
    }

    private errorHandler(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An unknown error occurred';
        if (!error.error) {
            return throwError(errorMessage);
        } else {
            switch (error.error.error.message) {
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'Email was not found';
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'Invalid password';
                    break;
                case 'EMAIL_EXISTS':
                    errorMessage = 'Email that you entered is already in use';
                    break;
            }
            return throwError(errorMessage);
        }
    }

    private authHendler(data: RegisterResponseModel | LoginResponseModel) {
        const experationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
        const newUser = new User(data.email, data.localid, data.idToken, experationDate);
        this.user.next(newUser);
        this.autoLogOut(+data.expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(newUser));
    }

    autoLogin(): boolean {
        const data:
            {
                email: string;
                id: string;
                _token: string;
                _tokenExpirationDate: string;
            } = JSON.parse(localStorage.getItem('userData'));
        if (!data) {
            return false;
        }
        const expirationDate = new Date(data._tokenExpirationDate);
        const userData = new User(data.email, data.id, data._token, expirationDate);
        if (userData.token) {
            this.user.next(userData);
            const expirationDuration = new Date(expirationDate.getTime() - new Date().getTime()).getTime();
            this.autoLogOut(expirationDuration);
            return true;
        }
        return false;
    }

    autoLogOut(expirationTimer: number) {
        this.expirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationTimer);
    }
}
