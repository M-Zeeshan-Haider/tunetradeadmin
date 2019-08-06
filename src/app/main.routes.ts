import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';

export const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: 'src/app/modules/admin/admin.module#AdminModule'
    }
];
