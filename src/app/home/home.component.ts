import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Task} from '../shared/task';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.router = this._router.url;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }


}
