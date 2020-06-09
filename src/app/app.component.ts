import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'umbrella-project';
  displaying: string;


  setDisplaing(component: string){
    this.displaying = component;
  }
}
