import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TopicResponse } from '../models/topic-response.interface';
import { EMPTY, Observable, catchError, finalize, of, tap } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { DashboardActions } from './dashboard.actions';

export interface DashboardStateModel {
	isDataFetching: boolean;
  topics: TopicResponse[];
}

const defaults: DashboardStateModel = {
	isDataFetching: false,
  topics: []
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

	@Action(DashboardActions.GetAllTopics)
	getAll(ctx: StateContext<DashboardStateModel>): Observable<TopicResponse[]> {
    ctx.patchState({
      isDataFetching: true
    });

    return this.dashboardService.getAll()
      .pipe(
        catchError(_ => EMPTY),
        tap<TopicResponse[]>(topics => {
          ctx.patchState({
            topics: topics
          });

          return topics;
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
