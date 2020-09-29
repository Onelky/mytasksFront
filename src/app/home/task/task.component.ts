import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/task';
import {Tag} from '../../shared/tag';
import {ApplicationService} from "../../services/application.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  router: string;
  tasksArray: Task[];
  tags: Tag[];
  constructor(private _router: Router,
              private appService: ApplicationService) { }

  ngOnInit(): void {
    this.router = this._router.url;
    this.loadTasks();
  }
  loadTasks() {
    const homeObserver = {
      next: (tasks: Task[]) => {
        this.tasksArray = [];
        this.tasksArray = tasks;
        console.log('SUCCESSS');
      },
      error: err => {
        console.log('Failed');
      }
    };
    this.appService.getTasks().subscribe(homeObserver);

  }
  loadTags(){
    const homeObserver = {
      next: (tags: Tag[]) => {
        this.tags = tags;
        console.log('Tags loaded');
      },
      error: err => {
        console.log('Failed');
      }
    };
    this.appService.getTags().subscribe(homeObserver);
  }
}
