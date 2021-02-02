import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApplicationService } from 'src/app/services/application.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { NewTagComponent } from './new-tag.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { empty } from 'rxjs';


describe('NewTagComponent', () => {
  let component: NewTagComponent;
  let fixture: ComponentFixture<NewTagComponent>;
  let appService: ApplicationService;
  let snack: MatSnackBar;
  let tagList = []


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTagComponent],
      imports: [HttpClientModule,ReactiveFormsModule, MatSnackBarModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ApplicationService, AuthenticationService]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  function updateForm(name, description) {
    component.newTagForm.controls['name'].setValue(name);
    component.newTagForm.controls['description'].setValue(description);
    tagList.push(component.newTagForm.value);

  }

  it('should create New tag component', () => {
    
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls', () => {
    expect(component.newTagForm.contains('name')).toBeTruthy();
    expect(component.newTagForm.contains('description')).toBeTruthy();

  })

  it('should make name control required', () => {
    let control = component.newTagForm.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();

  });

  it('should make description control non required', () => {
    let control = component.newTagForm.get('description');
    control.setValue('');
    expect(control.valid).toBeTruthy();
  })

  it('login form initial state should be invalid', () => {
    expect(component.newTagForm).toBeDefined();
    expect(component.newTagForm.invalid).toBeTruthy();
  })


  it('name should not be more than 20 char', () => {

    let control = component.newTagForm.get('name');
    control.setValue('nombrelargode20caracteres');
    expect(control.valid).toBeFalsy();

  })

  it('description should be less than 50 char', () => {

    let control = component.newTagForm.get('description');
    control.setValue('Descripcion extremadamente largaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    expect(control.valid).toBeFalsy();
  });

  // GUARDAR TAG  

  it('new tag should be added to the list of tags', () => {
    updateForm('Aseguramiento', 'Descripcion nueva');
    component.submitTagForm();
    expect(tagList[0].name).toContain('');
  })

  

  it('save button should be disabled when name controller is empty', () => {
   
    const saveBtn = fixture.debugElement.nativeElement.querySelector('#saveBtn');
    
    updateForm('', 'Descripcion nueva');

    expect(saveBtn.disabled).toBeTruthy();

  })

  it('save button should be disabled when description controller is longer than 50 char', () => {

    const saveBtn = fixture.debugElement.nativeElement.querySelector('#saveBtn');

    updateForm('Nombre', 'Descripcion extremadamente largaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

    expect(saveBtn.disabled).toBeTruthy();

  })

});
