import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './accountModule/account.component';
import {ErrorComponent} from './error/error.component';

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
    path: 'account', component: AccountComponent
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
