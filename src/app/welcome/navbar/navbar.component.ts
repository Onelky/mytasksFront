import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
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

  ngOnInit(): void {

  }

}
