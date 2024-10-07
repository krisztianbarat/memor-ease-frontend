import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, of } from 'rxjs';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { DashboardActions } from './features/dashboard/stores/dashboard.actions';
import { TopicCreateComponent } from './features/topic/pages/topic-create/topic-create.component';
import { TopicCreateActions } from './features/topic/stores/topic-create.actions';

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
        component: TopicCreateComponent,
        canActivate: [() => of(true)],
        canDeactivate: [
          () =>
            inject(Store)
              .dispatch(TopicCreateActions.ResetState)
              .pipe(map(() => true)),
        ],
      },
    ],
  },
];
