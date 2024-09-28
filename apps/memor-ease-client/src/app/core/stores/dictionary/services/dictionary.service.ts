import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/memor-ease-client/src/environments/environment';
import { Observable } from 'rxjs';
import { DictionaryInternationalizationResponse } from '../models/dictionary-internationalization-response.interface';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly controller = `${environment.apiV1}/dictionary`;

  constructor(private readonly httpClient: HttpClient) {}

  getDictionaryInternationalizationResponses(): Observable<DictionaryInternationalizationResponse> {
    return this.httpClient.get<DictionaryInternationalizationResponse>(
      this.controller
    );
  }
}
