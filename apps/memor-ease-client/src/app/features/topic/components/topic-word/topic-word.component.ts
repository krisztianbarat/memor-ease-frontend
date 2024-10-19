import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { InputComponent } from 'apps/memor-ease-client/src/app/core/components/input/input.component';
import { TopicCreateFormEvent } from '../../models/topic-create-form-event.interface';
import { TopicDictionaryUpsertRequest } from '../../models/topic-dictionary-upsert-request.interface';

@Component({
  selector: 'app-topic-word',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './topic-word.component.html',
  styleUrl: './topic-word.component.scss',
})
export class TopicWordComponent implements OnInit {
  @Output() formChanges = new EventEmitter<TopicCreateFormEvent>();
  @Output() deleteTopicWord = new EventEmitter<void>();

  untypedFormGroup!: UntypedFormGroup;

  constructor(private readonly untypedFormBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.untypedFormGroup.valueChanges.subscribe((formValues) => {
      this.formChanges.emit({
        topicWord: formValues as TopicDictionaryUpsertRequest,
        valid: this.untypedFormGroup.valid,
      });
    });
  }

  onTopicSourceWordValueChanges(sourceWord: string | number): void {
    this.untypedFormGroup.patchValue({
      sourceWord: sourceWord,
    });
  }

  onTopicTargetWordValueChanges(targetWord: string | number): void {
    this.untypedFormGroup.patchValue({
      targetWord: targetWord,
    });
  }

  onDeleteTopicWord(): void {
    this.deleteTopicWord.emit();
  }

  private initForm(): void {
    this.untypedFormGroup = this.untypedFormBuilder.group({
      sourceWord: [null, [Validators.required]],
      targetWord: [null, Validators.required],
    });
  }
}
