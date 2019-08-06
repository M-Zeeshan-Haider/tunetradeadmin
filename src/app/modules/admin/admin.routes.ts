import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTokenListComponent } from './admin-token-list/admin-token-list.component';
import { AuthCanActivateGuardService } from 'src/app/shared/guards/auth.can-activate.guard/auth-can-activate-guard.service';
import { AdminOutletComponent } from './admin-outlet/admin-outlet.component';
import { KycComponent } from './kyc-group/kyc/kyc.component';



export const adminRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: AdminOutletComponent,
        canActivate: [AuthCanActivateGuardService],
        children: [
            {
                path: '',
                component: AdminHomeComponent
            },
            {
                path: 'list',
                component: AdminTokenListComponent
            },
            {
                path: 'kyc',
                component: KycComponent
            }
        ]
    }
];
