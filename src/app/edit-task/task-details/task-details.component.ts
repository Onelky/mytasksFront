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
  tagList: any;
  tagsIdsArr = []

  constructor( private router: Router,private fb : FormBuilder, private aplicationservice : ApplicationService) { }

  ngOnInit(): void {
    this.tagList = this.aplicationservice.tagsList;
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
save(){
    const newTask = JSON.stringify(this.taskForm.value);
    const taskObserver = {
      next: x => {
        this.aplicationservice.tasksList.push(this.taskForm.value);
    },

  }

    console.log(this.taskForm.value);
    this.aplicationservice.createTask(newTask).subscribe(taskObserver);
    }
    getTags(){

    }

  getTagsValues($event:{
    source: { value: any; selected: any };
  }){
    const tagID = $event.source.value;

      if($event.source.selected == true){
        this.tagsIdsArr.push(tagID);
        console.log(tagID);

      } else {
        this.tagsIdsArr =  this.tagsIdsArr.filter(function (value){return value != tagID});
        //filtered = array.filter(function(value, index, arr){ return value > 5;});
      }
      this.taskForm.get('tagIds').setValue(this.tagsIdsArr);
    console.log(this.taskForm.get('tagIds').value);
  }
}


    //}







