import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/memor-ease-client/src/environments/environment';
import { Observable } from 'rxjs';
import { AccessedTopic } from '../models/accessed-topic.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly controller = `${environment.apiV1}/topic`;

  constructor(private readonly httpClient: HttpClient) { }

  getAccessedTopics = (): Observable<AccessedTopic[]> => this.httpClient.get<AccessedTopic[]>(`${this.controller}/accessed-topics`);
}
