import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, of } from 'rxjs';
import { TopicActions } from './features/dashboard-feature/stores/topic.actions';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    canActivate: [
      () => inject(Store).dispatch(TopicActions.GetAll).pipe(map(() => true))
    ],
    canDeactivate: [
      () => inject(Store).dispatch(TopicActions.ResetState).pipe(map(() => true))
    ],
    loadComponent: () => import('./features/dashboard-feature/pages/dashboard/dashboard.component').then(component => component.DashboardComponent)
  }
];
