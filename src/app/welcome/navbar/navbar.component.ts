import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../welcome.component.css']
})

export class NavbarComponent implements OnInit {
  title = 'app';
  router: string;
  constructor(private _router: Router) {
    this.router = _router.url;
  }
  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !!token;
  }

  ngOnInit(): void {

  }

}
