import {Component, Inject, OnInit} from '@angular/core';
import {
  FormBuilder, FormGroup,
  Validators
} from '@angular/forms';
import { ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import {Tag} from "../../shared/tag";
import {Task} from "../../shared/task";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Subtask} from "../../shared/subtask";


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskForm : FormGroup
  subtasks = [];
  tagsList: any;
  selectedTagsIds = []
  selectedTask = this.data



  constructor( private router: Router,private fb : FormBuilder,
               private aplicationservice : ApplicationService,
               private appService: ApplicationService, @Inject (MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if(this.aplicationservice.tagsList == undefined)
    {
      const observer = {
        next: (tags: Tag[]) => {
          this.tagsList = tags;
        }
      }
      this.tagsList = this.appService.getTags().subscribe(observer)
    }
    this.isNewTask();
    this.createTaskForm();

  }

isNewTask(){
    if(this.selectedTask == undefined){
      this.selectedTask = {} as Task;
      console.log(this.selectedTask);
    }
    else {
      //this.taskForm.name.setValue(this.selectedTask.name)//get('name').setValue(this.selectedTask.name)
      console.log(this.selectedTask.value)
    }

}
createTaskForm(){

this.taskForm = this.fb.group({

name:  [this.selectedTask.name,[Validators.required, Validators.maxLength(15)]],
description: [this.selectedTask.description],
startDate: [this.selectedTask.startDate,Validators.required],
dueDate: [this.selectedTask.dueDate,Validators.required],
  subtasks: [[]],
  tagIds: [],
})


  console.log('Selected' + this.data.tagIds)
  console.log('taglist: ' + this.tagsList)
  console.log('Selected + value ' + this.selectedTask.tagIds.value)
  console.log('taglist + val:' + this.tagsList.value)


}
//private fromArryObjectsToArrayOptions = (val: any)
save(){
    this.taskForm.get('subtasks').setValue(this.subtasks);
    const newTask = JSON.stringify(this.taskForm.value);
    const taskObserver  = { next: () => {

    },
  };
    this.aplicationservice.createTask(newTask).subscribe(taskObserver);

    }

  getTagsValues($event:{
    source: { value: any; selected: any };
  }){
    // Metodo para obtener los ids de las tareas que van siendo seleccionadas
    const tagID = $event.source.value;

      if($event.source.selected == true){
        this.selectedTagsIds.push(tagID);
        console.log(tagID);

      } else {
        this.selectedTagsIds =  this.selectedTagsIds.filter((value) => {return value != tagID});
      }
      this.taskForm.get('tagIds').setValue(this.selectedTagsIds);
    console.log(this.taskForm.get('tagIds').value);
  }

  addSubtask($event: any){
    let newSubtask = {} as Subtask;
    newSubtask.name = $event.target.value
    newSubtask.state = 0;
    this.subtasks.push(newSubtask);
    console.log(this.subtasks);
  }

}









