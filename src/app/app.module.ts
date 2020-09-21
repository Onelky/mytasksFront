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

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ErrorComponent,
    NavbarComponent,
     // esto es para no tener que hacer una lista de componentes
    // cada vez que se anada uno nueo se agregara automaticamente.
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterModule,
        CommonModule
    ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export * from './app.module'; // <==== THAT WAS MISSING

