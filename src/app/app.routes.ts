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
      {
        path: 'test',
        loadComponent: () =>
          import('./modules/test/testExpansionPanel.component').then(
            (m) => m.testExpansionPanelComponent
          ),
      },
      {
        path: 'well-performance',
        loadComponent: () =>
          import('./modules/well-performance/wellPerformance.component').then(
            (m) => m.WellPerformanceComponent
          ),
      },
    ],
  },
];
