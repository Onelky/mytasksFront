import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClockComponent } from './clock/clock.component';
import { TaskComponent } from './task/task.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {TagsComponent} from './tags/tags.component';
import {RecycleBinComponent} from './recycle-bin/recycle-bin.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatLineModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {TaskDetailsComponent} from '../edit-task/task-details/task-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core/'
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';
//import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NewTagComponent } from './tags/new-tag/new-tag.component';


@NgModule({
  declarations: [
    ClockComponent,
    TaskDetailsComponent,
    HomeComponent,
    TaskComponent,
    SideBarComponent,
    TagsComponent,
    RecycleBinComponent,
    ConfigurationComponent,
    NewTagComponent,


  ]
  ,
  imports: [
    BrowserModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatLineModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
// mms

