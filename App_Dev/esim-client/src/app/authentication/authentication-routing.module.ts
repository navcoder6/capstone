import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { SigninComponent } from './signin/signin.component';

import { RegisterComponent } from './register/register.component';

const AuthenticationRoutes: Routes = [
    {
        path: 'authenticate',
        component: AuthenticationComponent,
        children: [
            {
                path: 'user',
                component: SigninComponent
            },
            {
                path: 'admin',
                component: LoginAdminComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AuthenticationRoutes)],
    exports: [RouterModule]
})

export class AuthenticationRoutingModule {

}
