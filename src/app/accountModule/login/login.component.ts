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

  onSubmit(f: NgForm) {
    // Con este metodo se tendra acceso a los
    // datos introducidos por el usuario

    const loginObservable = of(1, 2, 3);
    const myObserver = {
      next: x => console.log('User logged in ' + x),
      error: err => console.error(' error: ' + err),
    };

    console.log(f.value);
    console.log(f.valid);
    this.service.login(f.value).subscribe();

  }
}
