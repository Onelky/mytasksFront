import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
// IMPORTACION DE MODULOS
import { ErrorComponent } from './error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './welcome/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AccountModule} from './accountModule/account.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { CancelTaskDialogComponent } from './shared/cancel-task-dialog/cancel-task-dialog.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ErrorComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    CancelTaskDialogComponent,

     // esto es para no tener que hacer una lista de componentes
    // cada vez que se anada uno nueo se agregara automaticamente.
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
      MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatSelectModule,
        MatChipsModule
    ],
  exports: [
    NavbarComponent,
   // SideBarComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export * from './app.module'; // <==== THAT WAS MISSING

