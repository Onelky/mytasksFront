import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './accountModule/account.component';
import {ErrorComponent} from './error/error.component';
import {RegisterComponent} from './accountModule/register/register.component';
import {LoginComponent} from './accountModule/login/login.component';
import {ForgotPasswordComponent} from './accountModule/forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import {AccountModule} from './accountModule/account.module';
import {TaskComponent} from './home/task/task.component';
import {HomeModule} from './home/home.module';
import {TagsComponent} from './home/tags/tags.component';
import {RecycleBinComponent} from './home/recycle-bin/recycle-bin.component';
import {ConfigurationComponent} from './home/configuration/configuration.component';


const routes: Routes = [

  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
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
        path: 'register', component: RegisterComponent
      },
      {
        path: 'forgotpassword', component: ForgotPasswordComponent
      },
      {
        path: 'home', component: HomeComponent,
        children: [
          {
            path: 'tags', component: TagsComponent
          },
          {
            path: 'recycle', component: RecycleBinComponent
          },
          {
            path: 'configuration', component: ConfigurationComponent
          }
        ]
      },
      {
        path: 'tags', component: TagsComponent
      },
      {

        path: 'recycle', component: RecycleBinComponent
      },
      {

        path: 'configuration', component : ConfigurationComponent
      }






    ]
  },
  {
    path: '**', component: ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],

  exports: []
})
export class AppRoutingModule { }
export const  routingComponents = [WelcomeComponent];
