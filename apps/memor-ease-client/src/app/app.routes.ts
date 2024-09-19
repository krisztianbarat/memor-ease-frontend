import { Route } from '@angular/router';
import { of } from 'rxjs';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard-feature/pages/dashboard/dashboard.component').then(component => component.DashboardComponent)
  }
];
