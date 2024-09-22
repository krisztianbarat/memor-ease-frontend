import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { concatMap, forkJoin, from, map, mergeMap, of, switchMap } from 'rxjs';
import { DashboardActions } from './features/dashboard-feature/stores/dashboard.actions';
import { DictionaryActions } from './cores/store/dictionary.actions';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    canActivate: [
      () => {
        const store = inject(Store);

        return forkJoin([
          of(DictionaryActions.GetDictionaries),
          of(DashboardActions.GetAccessedTopics)
        ])
          .pipe(
            concatMap(action => {
              store.dispatch(action);

              return of(action);
            }),
            map(() => true)
          );
      }
    ],
    canDeactivate: [
      () => inject(Store).dispatch(DashboardActions.ResetState).pipe(map(() => true))
    ],
    loadComponent: () => import('./features/dashboard-feature/pages/dashboard/dashboard.component').then(component => component.DashboardComponent)
  }
];
