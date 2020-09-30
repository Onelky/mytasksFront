import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Tag} from '../../shared/tag';
import {ApplicationService} from '../../services/application.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['../task/task.component.css'] // El css es el mismo que el del modulo task
})
export class TagsComponent implements OnInit {

  constructor(private router: Router, private appService: ApplicationService) { }
  tagsList: Tag[];
  // TODO: falta la funcion de agregar un nuevo tag y la de borrar.

  ngOnInit(): void {
    // tslint:disable-next-line:one-variable-per-declaration
    this.tagsList = this.appService.tagsList;
  }

}
