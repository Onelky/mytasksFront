import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/task';
import {ApplicationService} from '../../services/application.service';
import {Tag} from '../../shared/tag';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksArray: Task[];
  tags: Tag[];
  router: string;

  constructor(private _router: Router, private appService: ApplicationService) { }

  ngOnInit(): void {
    this.loadTasks();
    this.loadTags();
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
