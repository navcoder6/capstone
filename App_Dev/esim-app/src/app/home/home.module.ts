import { NgModule } from '@angular/core';
import { routing }  from '../app.routing';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,routing
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent]
})
export class HomeModule { }
