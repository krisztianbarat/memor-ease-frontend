import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { TopicCreateActions } from './topic-create.actions';

export interface TopicCreateStateModel {
  isDataFetching: boolean;
}

const defaults: TopicCreateStateModel = {
  isDataFetching: false,
};

@Injectable({
  providedIn: 'root',
})
@State<TopicCreateStateModel>({
  name: 'TopicCreateState',
  defaults: defaults,
})
export class TopicCreateState {
  @Action(TopicCreateActions.ResetState)
  resetState(
    ctx: StateContext<TopicCreateStateModel>
  ): Observable<TopicCreateStateModel> {
    ctx.setState(defaults);

    return of(ctx.getState());
  }
}
