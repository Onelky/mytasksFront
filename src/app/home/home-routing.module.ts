import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {TagsComponent} from './tags/tags.component';
import {RecycleBinComponent} from './recycle-bin/recycle-bin.component';
import {ConfigurationComponent} from './configuration/configuration.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
export const  routingComponents = [HomeComponent];
