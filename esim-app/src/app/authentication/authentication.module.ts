import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticationComponent, SigninComponent, RegisterComponent]
})
export class AuthenticationModule {
 }
