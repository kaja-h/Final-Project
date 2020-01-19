import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FiltersComponent } from './main/filters/filters.component';
import { OffersComponent } from './main/offers/offers.component';
import { MapComponent } from './main/map/map.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FiltersComponent,
        OffersComponent,
        MapComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
