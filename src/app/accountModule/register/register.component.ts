import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'] // Utiliza el mismo css que el componente login
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showMessage = null;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  // tslint:disable-next-line:typedef
  createRegisterForm(){
    // Crear un form usando el FormBuilder
    this.registerForm = this.fb.group({
      Fullname: ['', [Validators.required, Validators.maxLength(20)]],
      Username: ['', [Validators.required, Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12),
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, { hasSpecialCharacters: true }),

      ]],
      ConfirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  // CUSTOM VALIDATOR
  passwordMatchValidator(pass: FormGroup){
    return pass.get('Password').value === pass.get('ConfirmPassword').value
      ? null : {mismatch: true};
  }
  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }


  // tslint:disable-next-line:typedef
  register() {

    if (this.registerForm.valid){
      const registerObserver = {
        next: x => {
          this.showMessage = true;
          setTimeout(() => {
            this.router.navigate(['/account']);
          }
          , 8000);
        },
        error: err => { console.log('Failed');
          this.showMessage = false; }
      };
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(registerObserver);
    }

  }
}
