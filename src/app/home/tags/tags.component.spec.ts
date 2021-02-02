import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationService } from 'src/app/services/application.service';

import { TagsComponent } from './tags.component';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;
  let tagService: ApplicationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tagService = new ApplicationService(null);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
