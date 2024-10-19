import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  ReactiveFormsModule,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncButtonComponent } from 'apps/memor-ease-client/src/app/core/components/async-button/async-button.component';
import { InputComponent } from 'apps/memor-ease-client/src/app/core/components/input/input.component';
import { SingleDropdownSelectorComponent } from 'apps/memor-ease-client/src/app/core/components/single-dropdown-selector/single-dropdown-selector.component';
import { SyncButtonComponent } from 'apps/memor-ease-client/src/app/core/components/sync-button/sync-button.component';
import { TextAreaComponent } from 'apps/memor-ease-client/src/app/core/components/text-area/text-area.component';
import { KeyValuePair } from 'apps/memor-ease-client/src/app/core/stores/dictionary/models/key-value-pair.interface';
import { TopicWordComponent } from '../topic-word/topic-word.component';

@Component({
  selector: 'app-topic-create-form',
  standalone: true,
  imports: [
    CommonModule,
    SingleDropdownSelectorComponent,
    ReactiveFormsModule,
    InputComponent,
    TranslateModule,
    SyncButtonComponent,
    AsyncButtonComponent,
    TopicWordComponent,
    TextAreaComponent,
  ],
  templateUrl: './topic-create-form.component.html',
  styleUrl: './topic-create-form.component.scss',
})
export class TopicCreateFormComponent implements OnInit {
  @Input() dictionaryLanguages: KeyValuePair<number, string>[] = [];
  @Input() languageLevels: KeyValuePair<number, string>[] = [];

  untypedFormGroup!: UntypedFormGroup;

  constructor(private readonly untypedFormBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  getTopicDictionariesFormArray(): UntypedFormArray {
    const result = this.untypedFormGroup.get(
      'topicDictionaries'
    ) as UntypedFormArray;

    return result;
  }

  public onDeleteTopicWord(i: number) {
    const topicDictionaries = this.untypedFormGroup.get(
      'topicDictionaries'
    ) as FormArray;

    if (topicDictionaries.length > 1) {
      topicDictionaries.removeAt(i);
    } else {
      topicDictionaries.reset();
    }
  }

  onSelectedLanguageLevelsOption(optionKey: number | null): void {
    this.untypedFormGroup.patchValue({
      languageLevel: optionKey,
    });
  }

  onSelectedSourceLanguageOption(optionKey: number | null): void {
    this.untypedFormGroup.patchValue({
      languageLevel: optionKey,
    });
  }

  onSelectedTargetLanguageOption(optionKey: number | null): void {
    this.untypedFormGroup.patchValue({
      languageLevel: optionKey,
    });
  }

  onTitleValueChanges(title: string | number): void {
    this.untypedFormGroup.patchValue({
      title: title,
    });
    this.untypedFormGroup.get('title')?.updateValueAndValidity();
  }

  onDescriptionValueChanges(description: string | number): void {
    this.untypedFormGroup.patchValue({
      description: description,
    });
    this.untypedFormGroup.get('description')?.updateValueAndValidity();
  }

  getTopicDictionaries(): UntypedFormArray {
    const topicDictionaries =
      this.untypedFormGroup.get('topicDictionaries')?.value;

    return topicDictionaries as UntypedFormArray;
  }

  onAddTopicDictionary(): void {
    const topicDictionaries = this.untypedFormGroup.get(
      'topicDictionaries'
    ) as FormArray;
    topicDictionaries.push(
      this.untypedFormBuilder.group({
        sourceWord: [null, [Validators.required]],
        targetWord: [null, [Validators.required]],
      })
    );
  }

  private initForm(): void {
    this.untypedFormGroup = this.untypedFormBuilder.group({
      sourceLanguage: [1, []],
      targetLanguage: [1, []],
      title: [null, [Validators.required]],
      topicDictionaries: this.untypedFormBuilder.array([]),
      description: [null, []],
      languageLevel: [1, []],
    });
  }
}
