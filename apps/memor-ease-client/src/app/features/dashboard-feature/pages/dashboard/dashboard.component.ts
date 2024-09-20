import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardState, DashboardStateModel } from '../../stores/dashboard.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { DashboardActions } from '../../stores/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  state$: Observable<DashboardStateModel> = inject(Store).select(DashboardState.state);

  constructor(private readonly store: Store) { }

  onRefresh(): void {
    this.store.dispatch(DashboardActions.GetAllTopics);
  }
}
