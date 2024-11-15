import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/mainLayout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/field-performance' },
  {
    path: '',
    component: MainLayoutComponent, // Main Layout as the wrapper
    children: [
      {
        path: 'field-performance',
        loadComponent: () =>
          import('./modules/field-performance/fieldPerformance.component').then(
            (m) => m.FieldPerformanceComponent
          ),
      },
    ],
  },
];
