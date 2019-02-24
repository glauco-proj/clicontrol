import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./service/authentication.service";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { PersonComponent } from './person/person.component';
import {AlertService} from "./service/alert.service";
import { AlertComponent } from './alert/alert.component';
import { LogpersonComponent } from './logperson/logperson.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'fibonacci',
    component: FibonacciComponent,
    data: { title: 'Fibonacci' }
  },
  {
    path: 'person',
    component: PersonComponent,
    data: { title: 'Pessoas' }
  },
  {
    path: 'logperson',
    component: LogpersonComponent,
    data: { title: 'Consulta de Pessoas' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FibonacciComponent,
    PersonComponent,
    AlertComponent,
    LogpersonComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
