import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "./account-routing.module";
import { HeaderComponent } from './layout/header/header.component';
import {NavbarComponent} from "../welcome/navbar/navbar.component";
import {AppModule} from "../app.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,

  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    RouterModule,
    AppModule,
    FormsModule // se importa este modulo de formulario
  ],
  exports: [

    AccountComponent,
    LoginComponent,
    SignupComponent
  ],
  bootstrap: [SignupComponent]
})
export class AccountModule { }
