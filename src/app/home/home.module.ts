import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ClockComponent } from './clock/clock.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [SideBarComponent, ClockComponent, TasksComponent, TaskComponent]
  ,
  imports: [
    BrowserModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
// mms
