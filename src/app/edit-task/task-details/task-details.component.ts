import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,
  Validators } from '@angular/forms';
import { ApplicationService} from '../../services/application.service';
import {Router} from '@angular/router';
import {Tag} from "../../shared/tag";


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskForm : FormGroup
  tagsList: any;
  selectedTagsIds = []

  constructor( private router: Router,private fb : FormBuilder,
               private aplicationservice : ApplicationService,
               private appService: ApplicationService) { }

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
}









