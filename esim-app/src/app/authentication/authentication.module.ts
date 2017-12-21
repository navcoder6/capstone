import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginAdminComponent } from './login-admin/login-admin.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, SigninComponent, RegisterComponent, LoginAdminComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule {
 }
