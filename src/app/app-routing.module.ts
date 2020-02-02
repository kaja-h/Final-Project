import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthEmployerComponent} from './auth-employer/auth-employer.component';
import {AuthDeveloperComponent} from './auth-developer/auth-developer.component';

const appRoutes: Routes = [
  { path: 'users', component: AuthEmployerComponent },
  { path: 'devs', component: AuthDeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



