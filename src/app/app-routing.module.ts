import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './components/main/body/body.component';
import {OffersDetailsComponent} from './components/main/body/offers/offers-details/offers-details.component';
import {AuthEmployerComponent} from './components/auth/auth-employer/auth-employer.component';
import {AuthDeveloperComponent} from './components/auth/auth-developer/auth-developer.component';
import {BrandsComponent} from './components/brands/brands.component';
import {BrandsDetailsComponent} from './components/brands/brands-details/brands-details.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: BodyComponent, children: [
      { path: 'details/:id', component: OffersDetailsComponent }
    ] },
  { path: 'users', component: AuthEmployerComponent },
  { path: 'devs', component: AuthDeveloperComponent },
  { path: 'brands', component: BrandsComponent, children: [
      { path: 'details/:id', component: BrandsDetailsComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



