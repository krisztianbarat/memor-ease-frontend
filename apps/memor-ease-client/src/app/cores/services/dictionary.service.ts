import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/memor-ease-client/src/environments/environment';
import { Observable } from 'rxjs';
import { TopicServiceDictionary } from '../models/topic-service-dictionary.interface';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private readonly controller = `${environment.apiV1}/dictionary`;

  constructor(private readonly httpClient: HttpClient) { }

  getDictionaryInternationalizationResponses = (): Observable<TopicServiceDictionary> => this.httpClient.get<TopicServiceDictionary>(this.controller);
}
