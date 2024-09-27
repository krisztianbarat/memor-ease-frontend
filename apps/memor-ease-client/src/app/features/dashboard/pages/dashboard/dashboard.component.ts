import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccessedTopicListComponent } from '../../components/accessed-topic-list/accessed-topic-list.component';
import { AccessedTopic } from '../../models/accessed-topic.interface';
import { DashboardActions } from '../../stores/dashboard.actions';
import {
  DashboardState,
  DashboardStateModel,
} from '../../stores/dashboard.state';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AccessedTopicListComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  state$: Observable<DashboardStateModel> = inject(Store).select(
    DashboardState.state
  );

  constructor(private readonly store: Store) {
    this.state$.subscribe((state) => console.log('DashboardComponent', state));
  }

  ngOnInit(): void {
    this.store.dispatch(DashboardActions.GetAccessedTopics);
  }

  accessedTopicTrackById(_: number, accessedTopic: AccessedTopic): string {
    return accessedTopic.id;
  }
}
