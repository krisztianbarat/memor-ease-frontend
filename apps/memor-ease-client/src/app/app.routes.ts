import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, of } from 'rxjs';
import { DashboardActions } from './features/dashboard-feature/stores/dashboard.actions';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    canActivate: [
      () => inject(Store).dispatch(DashboardActions.GetAllTopics).pipe(map(() => true))
    ],
    canDeactivate: [
      () => inject(Store).dispatch(DashboardActions.ResetState).pipe(map(() => true))
    ],
    loadComponent: () => import('./features/dashboard-feature/pages/dashboard/dashboard.component').then(component => component.DashboardComponent)
  }
];
