import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import {AccountRoutingModule} from './account-routing.module';
import {AppModule} from '../app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,

  ],
    imports: [
        AccountRoutingModule,
        CommonModule,
        RouterModule,
        AppModule,
        FormsModule,
        ReactiveFormsModule,

        // se importa este modulo de formulario
    ],
  exports: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [RegisterComponent]
})
export class AccountModule { }
export * from './account.module'; // <==== THAT WAS MISSING

