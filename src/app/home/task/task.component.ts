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
import { DatePipe } from '@angular/common';
// @ts-ignore

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [DatePipe]
})

// TODO: Aplicacion de filtros (aplicar sub-menus para cada opcion)

// TODO: Form de editar task
// TODO: Filtro por fecha descendente y asc
export class TaskComponent implements OnInit {
  router: string;
  tasksList: Task[];
  sortedTasks: any;
  currentState: number;

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
        this.tasksList = this.tasksList.sort((a, b) => a.state - b.state);

      },
      error: () => {
      }
    };
    this.appService.getTasks().subscribe(homeObserver);

  }

  sortByState(state: number){
    this.tasksList = this.tasksList.filter((value) => {return value.state == state});
  }

  sortByDate(type: string){
    if(type === 'asc'){
      this.tasksList = this.tasksList.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    }
    else{
      this.tasksList = this.tasksList.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
    }
  }

  notSorting(){
    this.tasksList = this.appService.tasksList.filter((value) => {return value.visible == true});
    this.tasksList = this.appService.tasksList.sort((a, b) => a.state - b.state);
  }


  openNewTask(){
    const dialogNewTask = this.dialog.open(TaskDetailsComponent, {
      height: '90%',width: '64%'});
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
    const currentTask = this.getSelectedTask(taskId);
    const dialogBegintask = this.dialog.open(ClockComponent, {
      height: '80%',width: '75%', disableClose: true, data: currentTask});
    dialogBegintask.afterClosed().subscribe( timer => {

      currentTask.elapsedTime += timer.data;
      if(currentTask.elapsedTime > 0){
        currentTask.state = 1;
      }

      this.appService.updateTask(currentTask).subscribe();
      console.log(currentTask);
    });

  }

  getState(stateNumber: number){
    if(stateNumber === 0){
      return 'Not started '

    } else if(stateNumber === 1){

      return 'Started '

    }
  }

  transform(value: number): string {

    return new Date(value * 1000).toISOString().substr(11, 8)

  }
  finishTask(event: any, taskId){
    let currentTask = this.getSelectedTask(taskId);
    let ischecked = event.checked;

    if(ischecked){
      this.currentState = currentTask.state;
      currentTask.state = 2;
    }
    else {
      currentTask.state = this.currentState;
    }

    this.appService.updateTask(currentTask).subscribe();
  }

}
