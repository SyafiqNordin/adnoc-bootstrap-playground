import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', loadComponent: () => import('../app/modules/dashboard/dashboard.component').then(m => m.DashboardComponent) },
];
