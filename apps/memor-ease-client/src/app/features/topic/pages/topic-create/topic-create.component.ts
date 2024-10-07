import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { PageTitleComponent } from 'apps/memor-ease-client/src/app/core/components/page-title/page-title.component';
import { DictionaryState } from 'apps/memor-ease-client/src/app/core/stores/dictionary/dictionary.state';
import { KeyValuePair } from 'apps/memor-ease-client/src/app/core/stores/dictionary/models/key-value-pair.interface';
import { Observable } from 'rxjs';
import { TopicCreateFormComponent } from '../../components/topic-create-form/topic-create-form.component';

@Component({
  selector: 'app-topic-create',
  standalone: true,
  imports: [CommonModule, TopicCreateFormComponent, PageTitleComponent],
  templateUrl: './topic-create.component.html',
  styleUrl: './topic-create.component.scss',
})
export class TopicCreateComponent {
  dictionaryLanguages$: Observable<KeyValuePair<number, string>[]> = inject(
    Store
  ).select(DictionaryState.dictionaryLanguages);

  languageLevels$: Observable<KeyValuePair<number, string>[]> = inject(
    Store
  ).select(DictionaryState.languageLevels);
}
