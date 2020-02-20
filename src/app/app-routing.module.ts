import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthEmployerComponent} from './auth-employer/auth-employer.component';
import {AuthDeveloperComponent} from './auth-developer/auth-developer.component';
import {BodyComponent} from './main/body/body.component';
import {OffersDetailsComponent} from './main/body/offers/offers-details/offers-details.component';
import {BrandsComponent} from './brands/brands.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: BodyComponent, children: [
      { path: ':id', component: OffersDetailsComponent },
    ] },
  { path: 'users', component: AuthEmployerComponent },
  { path: 'devs', component: AuthDeveloperComponent },
  { path: 'brands', component: BrandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



