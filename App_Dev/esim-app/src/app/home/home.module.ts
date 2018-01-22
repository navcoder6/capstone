import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {SharedModule} from './../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent, HeaderComponent, FooterComponent]
})
export class HomeModule { }
