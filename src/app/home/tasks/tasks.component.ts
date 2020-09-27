import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/task';
import {ApplicationService} from '../../services/application.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private appService: ApplicationService) { }

  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks() {
    const homeObserver = {
      next: (tasks: Task[]) => {
        this.tasks = tasks;
        console.log('SUCCESSS');
      },
      error: err => {
        console.log('Failed');
      }
    };
    this.appService.getTasks().subscribe(homeObserver);

  }

}
