import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ServiceManagementComponent } from './service-management/service-management.component';


const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo:'addservice',
                pathMatch:'full'
            },
            {
                path :'addservice',
                component: ServiceManagementComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}

