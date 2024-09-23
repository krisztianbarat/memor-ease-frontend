import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { EMPTY, Observable, catchError, finalize, of, tap } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { AccessedTopic } from '../models/accessed-topic.interface';
import { DashboardActions } from './dashboard.actions';

export interface DashboardStateModel {
	isDataFetching: boolean;
  accessedTopics: AccessedTopic[];
}

const defaults: DashboardStateModel = {
	isDataFetching: false,
  accessedTopics: []
};

@Injectable({
	providedIn: 'root',
})
@State<DashboardStateModel>({
	name: 'DashboardState',
	defaults: defaults,
})
export class DashboardState {
  constructor(private readonly dashboardService: DashboardService) {}

	@Selector()
	static state(state: DashboardStateModel): DashboardStateModel {
    return state;
  }

	@Action(DashboardActions.GetAccessedTopics)
	getAccessedTopics(ctx: StateContext<DashboardStateModel>): Observable<AccessedTopic[]> {
    ctx.patchState({
      isDataFetching: true
    });

    return this.dashboardService.getAccessedTopics()
      .pipe(
        catchError(_ => EMPTY),
        tap<AccessedTopic[]>(accessedTopics => {
          ctx.patchState({
            accessedTopics: accessedTopics
          });

          return accessedTopics;
        }),
        finalize(() => {
          ctx.patchState({
            isDataFetching: false
          });
        })
      );
	}

  @Action(DashboardActions.ResetState)
	resetState(ctx: StateContext<DashboardStateModel>): Observable<DashboardStateModel> {
		ctx.setState(defaults);

		return of(defaults);
	}
}
