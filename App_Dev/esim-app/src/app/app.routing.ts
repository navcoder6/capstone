import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import {SigninComponent} from './authentication/signin/signin.component';
import{RegisterComponent} from './authentication/register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin/:mode', component: SigninComponent },
  {path:'register/:mode',component:RegisterComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
