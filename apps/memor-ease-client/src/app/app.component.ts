import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { ContentComponent } from './core/components/content/content.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DictionaryActions } from './core/stores/dictionary/dictionary.actions';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    ContentComponent,
    DashboardComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly translateService: TranslateService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang('en-GB');
    this.translateService.use('en-GB');
    this.store.dispatch(
      DictionaryActions.GetDictionaryInternationalizationResponses
    );
  }
}
