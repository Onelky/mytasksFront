import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css'] // Utiliza el mismo css que el componente login
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm){

  }

}
