import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,
  Validators } from '@angular/forms';
import { ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import { tap} from "rxjs/operators";


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
//private fromArryObjectsToArrayOptions = (val: any)
 getTags() {
    this.taskForm.get('tagIds').valueChanges.pipe(
     tap(val => console.log('valueee:' + val))
   )
 }
save(){
    const newTask = JSON.stringify(this.taskForm.value);
    this.getTags();
    const taskObserver = {
      next: x => {
        this.aplicationservice.tasksList.push(this.taskForm.value);
    },

  }
    console.log(this.taskForm.value);
    this.aplicationservice.createTask(newTask).subscribe(taskObserver);
    }

    }


    //}







