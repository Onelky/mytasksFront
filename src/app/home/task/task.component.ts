import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TaskDetailsComponent} from '../../edit-task/task-details/task-details.component';
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
              private appService: ApplicationService) { }

           //   taskList : Task[];

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
        this.tasksList = tasks;
        console.log('SUCCESSS');
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
  completeTask(id: number){ }

  beginTask(){
    const dialogBegintask = this.dialog.open(ClockComponent, {
      height: '60%',width: '40%'});
    dialogBegintask.afterClosed().subscribe( result => {
      console.log(result.value);

  });




}
}
