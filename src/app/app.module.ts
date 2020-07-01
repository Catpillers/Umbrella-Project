import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppRouteModule } from './app-rotes.module';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
   ],
   imports: [
      BrowserModule,
      AppRouteModule,
      HttpClientModule,
      NgbModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      }
   ],
   exports: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
