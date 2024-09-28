import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { PageTitleComponent } from 'apps/memor-ease-client/src/app/core/components/page-title/page-title.component';
import { SingleSelectorAutocompleteComponent } from 'apps/memor-ease-client/src/app/core/components/single-selector-autocomplete/single-selector-autocomplete.component';
import { DictionaryState } from 'apps/memor-ease-client/src/app/core/stores/dictionary/dictionary.state';
import { KeyValuePair } from 'apps/memor-ease-client/src/app/core/stores/dictionary/models/key-value-pair.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upsert',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    PageTitleComponent,
    SingleSelectorAutocompleteComponent,
  ],
  templateUrl: './upsert.component.html',
  styleUrl: './upsert.component.scss',
})
export class UpsertComponent {
  languageLevels$: Observable<KeyValuePair<number, string>[]> = inject(
    Store
  ).select(DictionaryState.languageLevels);

  dictionaryLanguages$: Observable<KeyValuePair<number, string>[]> = inject(
    Store
  ).select(DictionaryState.dictionaryLanguages);
}
