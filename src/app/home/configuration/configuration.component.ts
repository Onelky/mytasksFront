import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';

// TODO: Falta confirmar el correo electronico para la recuperacion de contraseña
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  hide = true;
  passwordForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  emailForm = new FormGroup({
      email: new FormControl('', [Validators.email])
    }
  );


  // TODO: implementar lo de verificar el correo

  constructor(private _snackBar: MatSnackBar,
              private authService: AuthenticationService) { }


  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getCurrentEmail(){
    return localStorage.getItem('email');
  }
  // tslint:disable-next-line:typedef
  submitPasswordForm(){
    const jsonForm = JSON.stringify(this.passwordForm.value);
    const passwordObserver = {
      next: x => {
        this.openSnackBar('Password was changed sucessfully!', 'OK');
        this.passwordForm.reset();
        this.passwordForm.clearValidators();
        console.log('Password Changed!');
      },
      error: err => {
        this.openSnackBar('Password could not be changed, try again', 'OK');
        console.log('Password not changed   ' + err.message.value);
        this.passwordForm.clearValidators();
        this.passwordForm.reset();
      }
    };
    this.authService.changePassword(jsonForm).subscribe(passwordObserver);
  }


  // tslint:disable-next-line:typedef
  submitEmailForm(){
    const email = this.emailForm.get('email').value;
    const emailObserver = {
      next: x => {
        this.openSnackBar('Email was changed sucessfully!', '');
        localStorage.setItem('email', email);
      },
      error: err => {
        this.openSnackBar('Email could not be changed, please try again.', 'OK');
        console.log('Email not changed   ' + err.message.value);
      }
    };
    this.authService.changeEmail(email.toString()).subscribe(emailObserver);
  }


  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, 'OK', {
      duration: 4000,
    });
  }

}
