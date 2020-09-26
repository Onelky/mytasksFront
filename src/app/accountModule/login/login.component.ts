import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: string;
  showMessage = null;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router,
              private service: AuthenticationService) {
  }

  ngOnInit(): void {
    if (this.loggedIn()){
      this.router = '/account/home';
      this.router = this._router.url  ;
      this._router.navigate(['/account/home']);
      this.router = this._router.url;
    }
    this.createLoginForm();
  }

  // tslint:disable-next-line:typedef
  createLoginForm() {
    // Crear un form usando el FormBuilder
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required, Validators.maxLength(10)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

    login ()
    {
      // Con este metodo se tendra acceso a los
      // datos introducidos por el usuario
      const jsonForm = JSON.stringify(this.loginForm.value);

      const loginObserver = {
        next: x => {
          console.log('SUCCESSS');
          this._router.navigate(['account/home']);
          this.showMessage = true;
        },
        error: err => {
          console.log('Failed');
          this.showMessage = false;
        }
      };

      this.service.login(jsonForm).subscribe(loginObserver);
    }
  // tslint:disable-next-line:typedef
    loggedIn()
    {
      const token = localStorage.getItem('token');
      return !!token;
    }


  }

