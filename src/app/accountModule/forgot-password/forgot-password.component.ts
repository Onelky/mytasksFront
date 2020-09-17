import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    // Con este metodo se tendra acceso a los
    // datos introducidos por el usuario
  }
}
