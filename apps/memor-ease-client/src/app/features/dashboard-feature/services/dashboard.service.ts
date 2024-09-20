import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/memor-ease-client/src/environments/environment';
import { Observable } from 'rxjs';
import { TopicResponse } from '../models/topic-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly controller = `${environment.api}/topic`;

  constructor(private readonly httpClient: HttpClient) { }

  getAll = (): Observable<TopicResponse[]> => this.httpClient.get<TopicResponse[]>(this.controller);
}
