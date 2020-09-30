import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {TagsComponent} from './tags/tags.component';
import {RecycleBinComponent} from './recycle-bin/recycle-bin.component';
import {ConfigurationComponent} from './configuration/configuration.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
