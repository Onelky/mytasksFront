import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn,
  Validators } from '@angular/forms';
import { ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskForm : FormGroup
  tagList = this.aplicationservice.tagsList;

  constructor( private router: Router,private fb : FormBuilder, private aplicationservice : ApplicationService) { }

  ngOnInit(): void {
    this.createTaskForm();

  }

createTaskForm(){



this.taskForm = this.fb.group({

name:  ['',[Validators.required, Validators.maxLength(15)]],
description: [''],
startDate: ['',Validators.required],
dueDate: ['',Validators.required],
  subtasks: [[]],
  tagIds: [[]],
})

}


save(){
    const newTask = JSON.stringify(this.taskForm.value);

    const taskObserver = {
      next: x => {
        this.aplicationservice.tasksList.push(this.taskForm.value)

        console.log ('Success' + x);

    },

  }
    console.log(this.taskForm.value);
    this.aplicationservice.createTask(newTask).subscribe(taskObserver);
    }

    }


    //}







