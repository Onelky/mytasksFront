import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Task} from '../shared/task';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }


}
