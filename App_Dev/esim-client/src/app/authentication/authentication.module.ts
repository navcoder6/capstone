import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';

import {SharedModule} from './../shared/shared.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

import { AuthenticationService,RegistrationService } from './services/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, SigninComponent, RegisterComponent, LoginAdminComponent],
  providers: [AuthenticationService,RegistrationService]
})
export class AuthenticationModule {
 }
