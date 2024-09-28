import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { TopicActions } from './topic.actions';

export interface TopicStateModel {
  isDataFetching: boolean;
}

const defaults: TopicStateModel = {
  isDataFetching: false,
};

@Injectable({
  providedIn: 'root',
})
@State<TopicStateModel>({
  name: 'TopicState',
  defaults: defaults,
})
export class TopicState {
  @Action(TopicActions.ResetState)
  resetState(ctx: StateContext<TopicStateModel>): Observable<TopicStateModel> {
    ctx.setState(defaults);

    return of(ctx.getState());
  }
}
