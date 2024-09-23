import { Component, inject } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { DashboardState, DashboardStateModel } from '../../stores/dashboard.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { DashboardActions } from '../../stores/dashboard.actions';
import { TopicListComponent } from '../../components/topic-list/topic-list.component';
import { KeyValuePair } from 'apps/memor-ease-client/src/app/cores/models/key-value-pair.interface';
import { DictionaryState } from 'apps/memor-ease-client/src/app/cores/store/dictionary.state';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TopicListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  state$: Observable<DashboardStateModel> = inject(Store).select(DashboardState.state);
  dictionaryLanguages$: Observable<KeyValuePair<number, string>[]> = inject(Store).select(DictionaryState.dictionaryLanguages);
}
