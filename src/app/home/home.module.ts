import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClockComponent } from './clock/clock.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import {AppRoutingModule} from '../app-routing.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import{TagsComponent} from './tags/tags.component'
import{RecycleBinComponent} from './recycle-bin/recycle-bin.component'
import{ConfigurationComponent} from './configuration/configuration.component';


@NgModule({
  declarations: [
    ClockComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    SideBarComponent,
    TagsComponent,
    RecycleBinComponent,
    ConfigurationComponent,



  ]
  ,
  imports: [
    BrowserModule,
    HomeRoutingModule


  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
// mms
