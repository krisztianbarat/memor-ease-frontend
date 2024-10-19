import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from 'apps/memor-ease-client/src/app/core/components/input/input.component';
import { SingleDropdownSelectorComponent } from 'apps/memor-ease-client/src/app/core/components/single-dropdown-selector/single-dropdown-selector.component';
import { KeyValuePair } from 'apps/memor-ease-client/src/app/core/stores/dictionary/models/key-value-pair.interface';
import { SyncButtonComponent } from '../../../../core/components/sync-button/sync-button.component';

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

  private initForm(): void {
    this.untypedFormGroup = this.untypedFormBuilder.group({
      title: [null, [Validators.required]],
      languageLevel: [1, []],
      sourceLanguage: [1, []],
      targetLanguage: [1, []],
    });
  }
}
