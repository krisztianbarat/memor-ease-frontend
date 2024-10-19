import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { PageTitleComponent } from 'apps/memor-ease-client/src/app/core/components/page-title/page-title.component';
import { SyncButtonComponent } from 'apps/memor-ease-client/src/app/core/components/sync-button/sync-button.component';
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
  imports: [
    CommonModule,
    AccessedTopicListComponent,
    TranslateModule,
    PageTitleComponent,
    SyncButtonComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  state$: Observable<DashboardStateModel> = inject(Store).select(
    DashboardState.state
  );

  currentLanguageId = 0;
  private readonly languages = ['en-GB', 'hu-HU', 'de-DE'];

  constructor(
    private readonly store: Store,
    private readonly translateService: TranslateService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(DashboardActions.GetAccessedTopics);
  }

  accessedTopicTrackById(_: number, accessedTopic: AccessedTopic): string {
    return accessedTopic.id;
  }

  nextLanguage(): void {
    switch (this.currentLanguageId) {
      case 0:
        this.currentLanguageId++;
        break;
      case 1:
        this.currentLanguageId++;
        break;
      case 2:
        this.currentLanguageId = 0;
        break;
    }

    const language = this.languages[this.currentLanguageId];
    this.translateService.use(language);
  }

  onClick(): void {
    this.router.navigate(['topic', 'create']);
  }
}
