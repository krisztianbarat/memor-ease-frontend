import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, EMPTY, finalize, first, Observable, tap } from 'rxjs';
import { DictionaryActions } from './dictionary.actions';
import { DictionaryInternationalizationResponse } from './models/dictionary-internationalization-response.interface';
import { KeyValuePair } from './models/key-value-pair.interface';
import { DictionaryService } from './services/dictionary.service';

export interface DictionaryStateModel {
  isDataFetching: boolean;
  dictionaryLanguages: KeyValuePair<number, string>[];
  languageLevels: KeyValuePair<number, string>[];
}

const defaults: DictionaryStateModel = {
  isDataFetching: false,
  dictionaryLanguages: [],
  languageLevels: [],
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
  static state(state: DictionaryStateModel): DictionaryStateModel {
    return state;
  }

  @Selector()
  static dictionaryLanguages(
    state: DictionaryStateModel
  ): KeyValuePair<number, string>[] {
    return state?.dictionaryLanguages ?? [];
  }

  @Selector()
  static languageLevels(
    state: DictionaryStateModel
  ): KeyValuePair<number, string>[] {
    return state?.languageLevels ?? [];
  }

  @Action(DictionaryActions.GetDictionaryInternationalizationResponses)
  getDictionaryInternationalizationResponses(
    ctx: StateContext<DictionaryStateModel>
  ): Observable<DictionaryInternationalizationResponse> {
    ctx.patchState({
      isDataFetching: true,
    });

    return this.dictionaryService
      .getDictionaryInternationalizationResponses()
      .pipe(
        first(),
        catchError((_) => EMPTY),
        tap<DictionaryInternationalizationResponse>(
          (dictionaryInternationalizationResponse) => {
            ctx.patchState({
              dictionaryLanguages:
                dictionaryInternationalizationResponse?.dictionaryLanguages as unknown as KeyValuePair<
                  number,
                  string
                >[],
              languageLevels:
                dictionaryInternationalizationResponse?.dictionaryLanguages as unknown as KeyValuePair<
                  number,
                  string
                >[],
            });

            return dictionaryInternationalizationResponse;
          }
        ),
        finalize(() => {
          ctx.patchState({
            isDataFetching: false,
          });
        })
      );
  }
}
