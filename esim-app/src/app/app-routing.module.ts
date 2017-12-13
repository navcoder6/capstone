import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminRoutes} from './admin/admin-routing.module';
import {AuthenticationRoutes} from './authentication/authentication-routing.module';
import {UserRoutes} from './user/user-routing.module';
import {HomeRoutes} from './home/home-routing.module';

const routes: Routes = [
    ...UserRoutes,
    ...HomeRoutes,
    ...AuthenticationRoutes,
    ...AdminRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
