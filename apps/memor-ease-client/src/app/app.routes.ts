import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, of } from 'rxjs';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { DashboardActions } from './features/dashboard/stores/dashboard.actions';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [() => of(true)],
    canDeactivate: [
      () =>
        inject(Store)
          .dispatch(DashboardActions.ResetState)
          .pipe(map(() => true)),
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
