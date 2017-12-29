import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';///
import { HttpClientModule } from '@angular/common/http';////

import { AppComponent } from './app.component';
import { routing }  from './app.routing';///

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';
import { RegisterService } from './authentication/register/register.service';////
import { SignInService } from './authentication/signin/signin.service';////

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    UserModule,
    AuthenticationModule,
    AdminModule,
    routing,///
    FormsModule,///
    HttpClientModule////
  ],
  providers: [RegisterService,SignInService],///
  //providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
