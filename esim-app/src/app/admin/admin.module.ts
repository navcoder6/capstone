import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ServiceManagementComponent } from './service-management/service-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, LoginAdminComponent, ServiceManagementComponent]
})
export class AdminModule { }
