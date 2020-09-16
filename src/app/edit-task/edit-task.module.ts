import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaskRoutingModule } from './edit-task-routing.module';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [TaskDetailsComponent, TaskComponent],
  imports: [
    CommonModule,
    EditTaskRoutingModule
  ]
})
export class EditTaskModule { }
