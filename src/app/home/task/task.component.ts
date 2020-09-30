import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/task';
import {Tag} from '../../shared/tag';
import {ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TaskDetailsComponent} from '../../edit-task/task-details/task-details.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  router: string;
  tasksList = this.appService.tasksList;

  // tslint:disable-next-line:variable-name
  constructor(public dialog: MatDialog, private _router: Router,
              private appService: ApplicationService) { }

  ngOnInit(): void {
    this.router = this._router.url;
  }
  // tslint:disable-next-line:typedef
  openNewTask(){
    // AQUI IRA EL MODULO DE NEW TASK
    const dialogNewTask = this.dialog.open(TaskDetailsComponent);
    dialogNewTask.afterClosed().subscribe( result => {
      console.log(result);
    });
  }
  completeTask(id: number){


  }
}
