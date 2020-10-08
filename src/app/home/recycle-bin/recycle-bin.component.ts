import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../../services/application.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../shared/confirmation-dialog/confirmation-dialog.component";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.component.html',
  styleUrls: ['../task/task.component.css']
})
export class RecycleBinComponent implements OnInit {

  constructor(private appService: ApplicationService,
              private dialog: MatDialog, private msgService: MessagesService) { }
  recycledTasks: any;
  globalTaksList = this.appService.tasksList;

  ngOnInit(): void {
    this.recycledTasks = this.globalTaksList.filter((value) => {return value.visible == false})
  }
  deleteDialog(idTask: number){

    const dialogDeleteTask = this.dialog.open(ConfirmationDialogComponent);

    dialogDeleteTask.afterClosed().subscribe( result => {
      if (result === 'yes'){
        let observer = this.msgService.getObserver('Task');
        this.appService.deleteTask(idTask).subscribe(observer);
        this.globalTaksList.splice(this.globalTaksList.findIndex(item => item.id === idTask), 1);
        this.recycledTasks = this.globalTaksList.filter((value) => {return value.visible == false})

      }
    });

  }
  restoreTask(idTask: number){
    let observer = this.msgService.getObserver('Task');
    const selectedTask = this.globalTaksList.find((value) => {return value.id == idTask})
    selectedTask.visible = true;
    console.log('hereee' + selectedTask)
    this.appService.updateTask(selectedTask).subscribe(observer);
    this.recycledTasks = this.recycledTasks.filter((value) => {return value.visible == false})
  }


}
