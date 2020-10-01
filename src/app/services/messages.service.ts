import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, 'OK', {
      duration: 4000,
    });
  }
  getObserver(componentName: string){
    return {
       next: x => {
         this.openSnackBar(`${componentName} was changed sucessfully!'`, '');
       },
       error: err => {
         this.openSnackBar(`${componentName} could not be changed, please try again.'`, 'OK');
       }
     };
  }

  // tslint:disable-next-line:variable-name
  constructor(private _snackBar: MatSnackBar) { }
}
