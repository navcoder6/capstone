import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material';

import {HomeRoutingModule} from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent, HeaderComponent]
})
export class HomeModule { }
