import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { AlertComponent } from '../shared/alert/alert.component';



@NgModule({
    declarations: [
        AuthComponent,
        AlertComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],

    exports: [

    ]
})

export class AuthModule { }
