import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { EMPTY, Observable, catchError, finalize, first, mergeMap, of, tap } from 'rxjs';
import { TopicServiceDictionary } from '../models/topic-service-dictionary.interface';
import { DictionaryActions } from './dictionary.actions';
import { DictionaryService } from '../services/dictionary.service';
import { KeyValuePair } from '../models/key-value-pair.interface';

export interface DictionaryStateModel {
	isDataFetching: boolean;
  topicServiceDictionary: TopicServiceDictionary
}

const defaults: DictionaryStateModel = {
	isDataFetching: false,
  topicServiceDictionary: {
    dictionaryLanguages: []
  }
};

@Injectable({
	providedIn: 'root',
})
@State<DictionaryStateModel>({
	name: 'DictionaryState',
	defaults: defaults,
})
export class DictionaryState {
  constructor(private readonly dictionaryService: DictionaryService) {}

	@Selector()
	static dictionaryLanguages(state: DictionaryStateModel): KeyValuePair<number, string>[] {
    return state?.topicServiceDictionary?.dictionaryLanguages ?? ([] as KeyValuePair<number, string>[]);
  }

  @Action(DictionaryActions.GetDictionaries)
  getDictionaries(ctx: StateContext<DictionaryStateModel>): Observable<DictionaryActions.GetDictionaries> {
    ctx.patchState({
      isDataFetching: true
    });

    return of(
      new DictionaryActions.GetTopicDictionaries(false)
    )
      .pipe(
        mergeMap(action => {
          ctx.dispatch(action);

          return of(action);
        }),
        finalize(() => {
          ctx.patchState({
            isDataFetching: false
          });
        })
      );
  }

  @Action(DictionaryActions.GetTopicDictionaries)
  getTopicDictionaries(ctx: StateContext<DictionaryStateModel>, {isDataFetchingNeedToReset}: DictionaryActions.GetTopicDictionaries): Observable<TopicServiceDictionary> {
    ctx.patchState({
      isDataFetching: true
    });

    return this.dictionaryService.getDictionaryInternationalizationResponses()
      .pipe(
        first(),
        catchError(_ => EMPTY),
        tap<TopicServiceDictionary>(topicServiceDictionary => {
          ctx.patchState({
            topicServiceDictionary: topicServiceDictionary
          });

          return topicServiceDictionary;
        }),
        finalize(() =>{
          if (isDataFetchingNeedToReset) {
            ctx.patchState({
              isDataFetching: false
            });
          }
        })
      );
  }

  @Action(DictionaryActions.ResetState)
	resetState(ctx: StateContext<DictionaryStateModel>): Observable<DictionaryStateModel> {
		ctx.setState(defaults);

		return of(defaults);
	}
}
