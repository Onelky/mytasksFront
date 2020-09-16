import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './accountModule/account.component';
import {ErrorComponent} from './error/error.component';
import {SignupComponent} from "./accountModule/signup/signup.component";
import {LoginComponent} from "./accountModule/login/login.component";

const routes: Routes = [

  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'account', component: AccountComponent,
    // Se tiene que indicar cuando un componente o modulo
    // tendra mas rutas nidadads o 'hijos'
    children: [
      {
        path: '', component: LoginComponent
      },
      {
        path: 'signup', component: SignupComponent
      },

    ]
  },
  {
    path: '**', component: ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [WelcomeComponent];
