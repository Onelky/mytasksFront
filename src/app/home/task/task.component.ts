import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TaskDetailsComponent} from '../../edit-task/task-details/task-details.component';
import {Task} from "../../shared/task";
import {ConfirmationDialogComponent} from "../../shared/confirmation-dialog/confirmation-dialog.component";
import {TaskConfirmationDialogComponent} from "./task-confirmation-dialog/task-confirmation-dialog.component";
import {MessagesService} from "../../services/messages.service";

import { ClockComponent } from '../clock/clock.component';
import { Task } from 'src/app/shared/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
// TODO: Agregar detalles de todas las tareas

// TODO: agregar form de nueva task

// TODO: Aplicacion dee filtros (aplicar sub-menus para cada opcion)



export class TaskComponent implements OnInit {
  router: string;
  tasksList: any;

  // tslint:disable-next-line:variable-name
  constructor(public dialog: MatDialog, private _router: Router,
              private appService: ApplicationService,
              private msgService: MessagesService) { }

  ngOnInit(): void {
    this.loadTasks()
    this.router = this._router.url;
 //   this.tasksList  = this.appService.tasksList;
  }
  // tslint:disable-next-line:typedef
  loadTasks() {
    const homeObserver = {
      next: (tasks: Task[]) => {

        this.appService.tasksList = tasks;
        // Se obtiene los valores que son visibles
        this.tasksList = tasks.filter((value) => {return value.visible == true});

      },
      error: () => {
        console.log('Failed');
      }
    };
    this.appService.getTasks().subscribe(homeObserver);

  }


  openNewTask(){
    // AQUI IRA EL MODULO DE NEW TASK
    const dialogNewTask = this.dialog.open(TaskDetailsComponent, {
      height: '80%',width: '90%'});
    dialogNewTask.afterClosed().subscribe( result => {
      console.log(result.value);
    });
  }
  recycleTask(taskId: any){
    // tslint:disable-next-line:prefer-const
    const dialogDeleteTask = this.dialog.open(TaskConfirmationDialogComponent);
    dialogDeleteTask.afterClosed().subscribe( result => {

      if (result === 'yes'){
        let observer = this.msgService.getObserver('Task');

        const currentTask = this.tasksList.find(x => x.id === taskId);
        currentTask.visible = false;

        this.appService.updateTask(currentTask).subscribe(observer);
        this.tasksList.splice(this.tasksList.findIndex(item => item.id === taskId), 1);
      }

    });
  }


  beginTask(){
    const dialogBegintask = this.dialog.open(ClockComponent, {
      height: '60%',width: '40%'});
    dialogBegintask.afterClosed().subscribe( result => {
      console.log(result.value);

  });

  }
}
