import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTaskDialogComponent } from './cancel-task-dialog.component';

describe('CancelTaskDialogComponent', () => {
  let component: CancelTaskDialogComponent;
  let fixture: ComponentFixture<CancelTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
