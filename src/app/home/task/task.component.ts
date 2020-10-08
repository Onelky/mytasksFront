import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import {TaskDetailsComponent} from '../../edit-task/task-details/task-details.component';
// @ts-ignore
import {Task} from "../../shared/task";
import {TaskConfirmationDialogComponent} from "./task-confirmation-dialog/task-confirmation-dialog.component";
import {MessagesService} from "../../services/messages.service";

import { ClockComponent } from '../clock/clock.component';
// @ts-ignore


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
  tasksList: Task[];

  // tslint:disable-next-line:variable-name
  constructor(public dialog: MatDialog, private _router: Router,
              private appService: ApplicationService,

              private msgService: MessagesService) { }

  ngOnInit(): void {
    this.loadTasks()


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
      }
    };
    this.appService.getTasks().subscribe(homeObserver);

  }


  openNewTask(){
    const dialogNewTask = this.dialog.open(TaskDetailsComponent, {
      height: '80%',width: '90%'});
    dialogNewTask.afterClosed().subscribe();
  }
  recycleTask(taskId: any){
    // tslint:disable-next-line:prefer-const
    const dialogDeleteTask = this.dialog.open(TaskConfirmationDialogComponent);
    dialogDeleteTask.afterClosed().subscribe( result => {

      if (result === 'yes'){
        let observer = this.msgService.getObserver('Task');

        const currentTask = this.getSelectedTask(taskId);
        currentTask.visible = false;

        this.appService.updateTask(currentTask).subscribe(observer);
        this.tasksList.splice(this.tasksList.findIndex(item => item.id === taskId), 1);
      }

    });
  }
  getSelectedTask(taskId: number){
    return this.tasksList.find(x => x.id === taskId);
  }

  openTimer(taskId: number){
    const dialogBegintask = this.dialog.open(ClockComponent, {
      height: '80%',width: '75%', disableClose: true});
    dialogBegintask.afterClosed().subscribe( timer => {
      console.log('out ' + timer.data);

      const currentTask = this.getSelectedTask(taskId);
      currentTask.elapsedTime += timer.data;

      this.appService.updateTask(currentTask).subscribe();
      console.log(currentTask);
    });

  }
}
