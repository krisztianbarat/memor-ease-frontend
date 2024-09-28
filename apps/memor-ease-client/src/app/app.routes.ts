import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, of } from 'rxjs';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { DashboardActions } from './features/dashboard/stores/dashboard.actions';
import { UpsertComponent } from './features/topic/pages/upsert/upsert.component';
import { TopicActions } from './features/topic/stores/topic.actions';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
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
    path: 'topic',
    children: [
      {
        path: 'create',
        component: UpsertComponent,
        canActivate: [() => of(true)],
        canDeactivate: [
          () =>
            inject(Store)
              .dispatch(TopicActions.ResetState)
              .pipe(map(() => true)),
        ],
      },
    ],
  },
];
