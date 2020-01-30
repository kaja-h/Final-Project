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

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FiltersComponent,
        BodyComponent,
        OffersComponent,
        MapComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
