import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AppComponent} from './app.component';

const routes: Routes = [

  {
    path: '', component: AppComponent
  },
  {
    path: 'welcomepage', component: AppComponent
  },
  {
    path: '',
    redirectTo: 'welcomepage',
    pathMatch: 'full'
  } // redirect to `first-component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [SignUpComponent];
