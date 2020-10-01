import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Tag} from '../../shared/tag';
import {ApplicationService} from '../../services/application.service';
import {MatDialog} from "@angular/material/dialog";
import {NewTagComponent} from "./new-tag/new-tag.component";
import {ConfirmationDialogComponent} from "../../shared/confirmation-dialog/confirmation-dialog.component";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['../task/task.component.css'] // El css es el mismo que el del modulo task
})
export class TagsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private dialog: MatDialog, private router: Router,
              private msgService: MessagesService,private appService: ApplicationService) { }
  tagsList: Tag[];

  // TODO: cuando se seleccione un tag se deberan cargar todas las tareas que pertenecen a este.

  ngOnInit(): void {
    // tslint:disable-next-line:one-variable-per-declaration
    this.tagsList = this.appService.tagsList;
  }
  openNewTag(){
    const dialogNewTask = this.dialog.open(NewTagComponent);
    dialogNewTask.afterClosed().subscribe( result => {
      console.log("Ooo:" + result);
    });
  }
  deleteTag(idTask: any){
    // tslint:disable-next-line:prefer-const
    const dialogNewTask = this.dialog.open(ConfirmationDialogComponent);
    dialogNewTask.afterClosed().subscribe( result => {

      if (result === 'yes'){

        let observer = this.msgService.getObserver('Tag');
        this.tagsList.splice(this.tagsList.findIndex(item => item.id === idTask), 1);
        this.appService.deleteTag(idTask).subscribe(observer);
      }

    });
  }

}
