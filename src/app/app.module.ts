import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FiltersComponent } from './main/filters/filters.component';
import { BodyComponent } from './main/body/body.component';
import { OffersComponent } from './main/body/offers/offers.component';
import { MapComponent } from './main/body/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AuthEmployerComponent } from './auth-employer/auth-employer.component';
import { AuthDeveloperComponent } from './auth-developer/auth-developer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FiltersComponent,
        BodyComponent,
        OffersComponent,
        MapComponent,
        AuthEmployerComponent,
        AuthDeveloperComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
