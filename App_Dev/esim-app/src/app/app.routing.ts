import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import {SigninComponent} from './authentication/signin/signin.component';
import{RegisterComponent} from './authentication/register/register.component';
import{UserHomeComponent} from './user/end-user/home.component';
//import{ViewLoggedIncidentComponent} from './user/end-user/viewloggedincident.component';//Added by Arun

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin/:mode', component: SigninComponent },
  { path:'register/:mode', component: RegisterComponent},
  { path:'userhome', component: UserHomeComponent},
  //{ path:'viewloggedincident', component: ViewLoggedIncidentComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
