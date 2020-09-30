import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Task} from '../shared/task';
import {Router} from '@angular/router';
import {Tag} from '../shared/tag';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: string;
  constructor(private route: Router, private appService: ApplicationService) { }

  tasksList = this.appService.tasksList;
  ngOnInit(): void {
    this.router = this.route.url;
    this.loadTags();
    this.loadTasks();
  }

  loadTasks() {
    const homeObserver = {
      next: (tasks: Task[]) => {
        this.appService.tasksList = [];
        this.appService.tasksList = tasks;
        console.log('SUCCESSS');
      },
      error: err => {
        console.log('Failed');
      }
    };
    this.appService.getTasks().subscribe(homeObserver);

  }
  // tslint:disable-next-line:typedef
  loadTags(){
    const homeObserver = {
      next: (tags: Tag[]) => {
        this.appService.tagsList = tags;
      },
      error: err => {
        console.log('Failed');
      }
    };
    this.appService.getTags().subscribe(homeObserver);
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }


}
