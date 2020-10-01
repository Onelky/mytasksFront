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

  constructor(private router: Router,private fb : FormBuilder, private aplicationservice : ApplicationService) { }

  ngOnInit(): void {
    this.createTaskForm();

  }

createTaskForm(){



this.taskForm = this.fb.group({

name:  ['',Validators.required],
description: ['',Validators.required],
startDate: ['',Validators.required],
dueDate: ['',Validators.required],

})

}


save(){

  //console.log(this.taskForm.value)
 // if (this.registerForm.valid){
   // const registerObserver = {
     // next: x => {console.log('SUCCESSS');
       // this.router.navigate(['/account']);
        // this.showMessage = true;
     // },
      //error: err => { console.log('Failed');
        //this.showMessage = false; }
    //};
    //console.log(this.registerForm.value);
    //this.authService.register(this.registerForm.value).subscribe(registerObserver);
    const task = JSON.stringify(this.taskForm.value);

    //if (this.taskForm.valid){
    const taskObserver = {
      next: x => {
        this.aplicationservice.tasksList.push(this.taskForm.value)

        console.log ('Success' + x);

    this.router.navigate(['/account/home']);
    },

  }
 // new DatePipe('en').transform(this.taskForm.value.StartDay, 'yyyy/MM/dd');
    console.log(this.taskForm.value);
    this.aplicationservice.createTask(this.taskForm.value).subscribe(taskObserver);
    }

    }


    //}







