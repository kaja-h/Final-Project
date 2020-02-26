import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/main/body/body.component';
import {MainComponent} from './components/main/main.component';
import {BrandsDetailsComponent} from './components/brands/brands-details/brands-details.component';
import {OffersComponent} from './components/main/body/offers/offers.component';
import {OffersListComponent} from './components/main/body/offers/offers-list/offers-list.component';
import {BrandsComponent} from './components/brands/brands.component';
import {MapComponent} from './components/main/body/map/map.component';
import {OffersDetailsComponent} from './components/main/body/offers/offers-details/offers-details.component';
import {AuthEmployerComponent} from './components/auth/auth-employer/auth-employer.component';
import {FiltersComponent} from './components/main/filters/filters.component';
import {AuthDeveloperComponent} from './components/auth/auth-developer/auth-developer.component';
import {BrandsListComponent} from './components/brands/brands-list/brands-list.component';
import { MocksComponent } from './mocks/mocks.component';
import { ServicesComponent } from './services/services.component';
import { HelpersComponent } from './helpers/helpers.component';
import {FormsModule} from "@angular/forms";


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
        AuthDeveloperComponent,
        OffersListComponent,
        OffersDetailsComponent,
        BrandsComponent,
        BrandsListComponent,
        BrandsDetailsComponent,
        MocksComponent,
        ServicesComponent,
        HelpersComponent
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
        MatCheckboxModule,
        MatSlideToggleModule,
        MatSliderModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
