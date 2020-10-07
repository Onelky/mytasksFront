import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskConfirmationDialogComponent } from './task-confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  let component: TaskConfirmationDialogComponent;
  let fixture: ComponentFixture<TaskConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
