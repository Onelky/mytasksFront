import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  router: string;

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {
    this.router = _router.url;
  }

  ngOnInit(): void {
  }
  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !!token;
  }


}
