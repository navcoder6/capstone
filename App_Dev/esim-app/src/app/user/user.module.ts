import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';

import { UserComponent } from './user.component';
import {SharedModule} from './../shared/shared.module';
import {UserRoutingModules} from './user-routing.module';
import { ViewRegistrationComponent } from './shared/components/view-registration/view-registration.component';
import { LogIncidentComponent } from './general-user/log-incident/log-incident.component';
import { IncidentsComponent } from './general-user/incidents/incidents.component';
import { NewSecurityIncidentComponent } from './general-user/new-security-incident/new-security-incident.component';
import { PendingIncidentComponent } from './control-room/pendingincident.component';//Added by Arun
import { SendMessageComponent } from './control-room/sendmessage.component';//Added by Arun
import { ServiceManagementComponent } from './../admin/service-management/service-management.component';//Added by Arun

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    UserRoutingModules,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[MediaMatcher],
  declarations: [UserComponent, ViewRegistrationComponent, LogIncidentComponent, IncidentsComponent, NewSecurityIncidentComponent,PendingIncidentComponent,SendMessageComponent,ServiceManagementComponent]
})
export class UserModule { }
