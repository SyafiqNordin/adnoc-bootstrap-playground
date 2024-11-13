import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    {
        path: '',
        component: MainLayoutComponent,  // Main Layout as the wrapper
        children: [
            { path: 'dashboard', loadComponent: () => import('./modules/dashboard/dashboard.component').then(m => m.DashboardComponent) },
        ]
    }
];
