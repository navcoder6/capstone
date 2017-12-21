import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ServiceManagementComponent } from './service-management/service-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, ServiceManagementComponent]
})
export class AdminModule { }
