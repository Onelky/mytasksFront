import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    // Con este metodo se tendra acceso a los
    // datos introducidos por el usuario
    console.log(f.name)
    console.log(f.value)
    console.log(f.valid)
  }

}
