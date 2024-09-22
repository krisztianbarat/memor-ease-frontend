import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessedTopic } from '../../models/accessed-topic.interface';
import { KeyValuePair } from 'apps/memor-ease-client/src/app/cores/models/key-value-pair.interface';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss',
})
export class TopicListComponent {
  @Input() accessedTopics: AccessedTopic[] = [];
  @Input() dictionaryLanguages: KeyValuePair<number, string>[] = [];

  getLanguageValue(languageKey: number): string {
    const dictionaryLanguage = this.dictionaryLanguages.find(language => language.key === languageKey);

    return dictionaryLanguage?.value ?? "";
  }
}
