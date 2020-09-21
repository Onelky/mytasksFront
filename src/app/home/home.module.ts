import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ClockComponent } from './clock/clock.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import {AppRoutingModule} from '../app-routing.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [SideBarComponent,
    ClockComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent]
  ,
  imports: [
    BrowserModule,
    HomeRoutingModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
// mms
