import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './user.component';
import {ViewRegistrationComponent,ViewMessageComponent} from './shared/components/index';
import {LogIncidentComponent} from './general-user/log-incident/log-incident.component';
import {IncidentsComponent} from './general-user/incidents/incidents.component';
import {NewSecurityIncidentComponent} from './general-user/new-security-incident/new-security-incident.component';
import {PendingIncidentComponent} from './control-room/pendingincident.component';//Added by Arun Temp
import {SendMessageComponent} from './control-room/sendmessage.component';//Added by Arun Temp
import { UpdateIncidentComponent } from './control-room/update-incident/update-incident.component';

const UserRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children:[
            {
                path:'',
                redirectTo:'logIncident',
                pathMatch:'full'
            },
            {
                path:'logIncident',
                component:LogIncidentComponent
            },
            {
                path:'registrationDetails',
                component:ViewRegistrationComponent
            },
            {
                path:'incidents',
                component:IncidentsComponent
            },
            {
                path:'new-incident/:serviceId',
                component:NewSecurityIncidentComponent
            },
            {
                path:'pendingincidents',
                component:PendingIncidentComponent
            },//Added by Arun Temp
            {
                path:'sendmessage',
                component:SendMessageComponent
            },//Added by Arun Temp
            {
                path:'viewalertmsg',
                component:ViewMessageComponent
            },//Added by Arun Temp
            {
                path:'update-incident/:serviceId',
                component:UpdateIncidentComponent
            },
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(UserRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModules{

}