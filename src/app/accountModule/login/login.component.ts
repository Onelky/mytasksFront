import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    // Con este metodo se tendra acceso a los
    // datos introducidos por el usuario
    const jsonForm = JSON.stringify(form.value);

    const loginObserver = {
      next: x => {console.log('SUCCESSS');
                  this.router.navigate(['account/home']);
                  },
      error: err => { console.log('Failed'); }
    };

    this.service.login(jsonForm).subscribe(loginObserver);
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
