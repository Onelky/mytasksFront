import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    // Con este metodo se tendra acceso a los
    // datos introducidos por el usuario
    const jsonForm = JSON.stringify(form.value);
    console.log(jsonForm);
    this.service.login(jsonForm).subscribe(next =>{
      console.log('SUCCESSS');
    }, error => {
      console.log('Failed');
    });
  }
}
