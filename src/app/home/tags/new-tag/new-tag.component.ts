import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticationService} from '../../../services/authentication.service';
import {ApplicationService} from '../../../services/application.service';
import { Tag } from 'src/app/shared/tag';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit {
  tagList = this.appService.tagsList;

  newTagForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(50)])
    }
  );
  constructor(private _snackBar: MatSnackBar, private authService: AuthenticationService,
              private appService: ApplicationService) { }
  ngOnInit(): void {
  }
  submitTagForm(){
    const tag = JSON.stringify(this.newTagForm.value);
    const tagObserver = {
      next: () => {
        this.appService.tagsList.push(this.newTagForm.value);
        this.openSnackBar('Tag was created sucessfully!');
      },
      error: () => {
        this.openSnackBar('New tag could not be created, please try again.');
      }
    };
    this.appService.createTag(tag).subscribe(tagObserver);
    this.tagList = this.appService.tagsList;//

  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 4000,
    });
  }

}
