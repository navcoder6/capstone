import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';///

import { AppComponent } from './app.component';
import { routing }  from './app.routing';///

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';

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
    FormsModule///
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
