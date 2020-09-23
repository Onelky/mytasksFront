import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css'] // Utiliza el mismo css que el componente login
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm){
    const registerObserver = {
      next: x => {console.log('SUCCESSS'); },
      error: err => { console.log('Failed'); }
    };
    console.log(registerForm.value);
    this.authService.register(registerForm.value).subscribe(registerObserver);
  }

}
