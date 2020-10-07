import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: string;
  constructor(private route: Router, private appService: ApplicationService) { }

  tasksList = this.appService.tasksList;
  ngOnInit(): void {
    this.router = this.route.url;
  }

  // tslint:disable-next-line:typedef

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }


}
