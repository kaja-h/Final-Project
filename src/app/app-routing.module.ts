import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthEmployerComponent} from './auth-employer/auth-employer.component';

const appRoutes: Routes = [
  { path: 'users', component: AuthEmployerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



