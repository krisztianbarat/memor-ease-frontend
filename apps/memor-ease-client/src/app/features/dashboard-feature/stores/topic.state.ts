import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TopicResponse } from '../models/topic-response.interface';
import { TopicActions } from './topic.actions';
import { EMPTY, Observable, catchError, finalize, of, tap } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

export interface TopicStateModel {
	isDataFetching: boolean;
  topics: TopicResponse[];
}

const defaults: TopicStateModel = {
	isDataFetching: false,
  topics: []
};

@Injectable({
	providedIn: 'root',
})
@State<TopicStateModel>({
	name: 'TopicState',
	defaults: defaults,
})
export class TopicState {
  constructor(private readonly dashboardService: DashboardService) {}

	@Selector()
	static state(state: TopicStateModel): TopicStateModel {
    return state;
  }

	@Action(TopicActions.GetAll)
	getAll(ctx: StateContext<TopicStateModel>): Observable<TopicResponse[]> {
    return this.dashboardService.getAll()
      .pipe(
        tap(() => {
          ctx.patchState({
            isDataFetching: true
          });
          console.log('TopicActions.GetAll - tap1', ctx.getState());
        }),
        catchError(_ => {
          console.log('TopicActions.GetAll - catchError', ctx.getState());
          return EMPTY;
        }),
        tap<TopicResponse[]>(topics => {
          ctx.patchState({
            topics: topics
          });
          console.log('TopicActions.GetAll - tap2', ctx.getState());

          return topics;
        }),
        finalize(() => {
          ctx.patchState({
            isDataFetching: false
          });
          console.log('TopicActions.GetAll - finalize', ctx.getState());
        })
      );
	}

  @Action(TopicActions.ResetState)
	resetState(ctx: StateContext<TopicStateModel>): Observable<TopicStateModel> {
		ctx.setState(defaults);

		return of(defaults);
	}
}
