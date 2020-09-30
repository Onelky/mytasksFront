import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';


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
  email = new FormControl('', [Validators.email]);


  // TODO: implementar lo de cambiar el correo

  constructor(private _snackBar: MatSnackBar,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  getCurrentEmail(){
    return localStorage.getItem('email');
  }
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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, 'OK', {
      duration: 4000,
    });
  }

}
