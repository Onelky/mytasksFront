import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'forgotpassword', component: ForgotPasswordComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
