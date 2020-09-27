import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isExpanded = false
  ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }

}
