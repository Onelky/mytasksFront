import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessagesService } from 'src/app/services/messages.service';
import { RouterTestingModule } from "@angular/router/testing";
import { MatMenuModule } from '@angular/material/menu';




import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatDialogModule, ReactiveFormsModule, MatSnackBarModule, MatMenuModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [MessagesService, ApplicationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Task Component', () => {
    expect(component).toBeTruthy();
  });

  it('should open confirmation dialog when delete icon is pressed', fakeAsync(() => {

    spyOn(component, 'recycleTask');
    let button = fixture.debugElement.nativeElement.querySelector('#deleteBtn');
    button.click();
    tick();

    fixture.whenStable().then(() => {
      expect(component.recycleTask).toHaveBeenCalled();
    });
  }));


});
