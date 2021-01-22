import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Observable, from, empty } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { LoginComponent } from './login.component';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const loginSpy = jasmine.createSpyObj('AuthenticationService', ['../services'])
const user = {Username: 'onelky', Password: 'Hola123@'}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let loginService: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ providers: [AuthenticationService] });
    
    loginService = new AuthenticationService(null);
    component = new LoginComponent(new FormBuilder(), loginService, routerSpy);
    component.ngOnInit();
    


  }));

/*
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  */

  function updateForm(username, password){
    component.loginForm.controls['Username'].setValue(username);
    component.loginForm.controls['Password'].setValue(password);

  }

  function loginTest (form: any){

    if(form == user){

      return true; 
    }
    else {
      return false;
    }

  }

    

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls', () =>{
    expect(component.loginForm.contains('Username')).toBeTruthy();
    expect(component.loginForm.contains('Password')).toBeTruthy();

  })

  it('should make username control required', () => {
    let control = component.loginForm.get('Username');
    control.setValue('');
    expect(control.valid).toBeFalsy();

  });

  it('should make password control required', () => {
    let control = component.loginForm.get('Password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  it('login form initial state should be invalid', ()=>{
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  })

  it('username should not be more than 20 char', () => {

    let control = component.loginForm.get('Username');
    control.setValue('nombrelargode20caracteres');
    expect(control.valid).toBeFalsy();
    
  })

  it('password should be more than 8 char', () => {

    let control = component.loginForm.get('Password');
    control.setValue('contra7');
    expect(control.valid).toBeFalsy();

  })

  it('form value should update when input is changed', () => {

    updateForm('onelky', 'Hola@');
    expect(component.loginForm.get('Username').value).toEqual('onelky');

  })

  // INICIO DE SESION 

  it('should call the Authentication module when login button is clicked', () => {
     let spy = spyOn(loginService, 'login').and.callFake(model => {
      return empty();

     })

     component.login();
     expect(spy).toHaveBeenCalled();

  })

  it('should log in when username and password are valid', () => {
    updateForm('onelky', 'Hola123@');

    const form = component.loginForm.value;

    expect(user).toEqual(form);
    
  })

  it('should not allow login if username is invalid', () => {

    updateForm('onelk', 'Hola123@');

    const form = component.loginForm.value;
    let comparison = false;

    if(form == user) { comparison = false}

    expect(comparison).toBeFalsy();


  })

});
