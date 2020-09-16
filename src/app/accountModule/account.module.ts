import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "./account-routing.module";



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    AccountComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AccountModule { }
