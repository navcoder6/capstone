import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminRoutes} from './admin/admin-routing.module';
import {UserRoutingModules} from './user/user-routing.module';

const appRoutes: Routes = [
    {
        path: '' ,
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...AdminRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,
        {
            enableTracing: true,
            useHash: false
        })],
    exports: [RouterModule]// NV
})

export class AppRoutingModule {

}
