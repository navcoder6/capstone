import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MediaMatcher } from '@angular/cdk/layout';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from './../shared/shared.module';
import { ServiceManagementComponent } from './service-management/service-management.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[MediaMatcher],
  declarations: [AdminComponent, ServiceManagementComponent]
})
export class AdminModule { }
