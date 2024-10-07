import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { KeyValuePair } from '../../stores/dictionary/models/key-value-pair.interface';

@Component({
  selector: 'app-single-dropdown-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-dropdown-selector.component.html',
  styleUrl: './single-dropdown-selector.component.scss',
})
export class SingleDropdownSelectorComponent implements OnInit {
  @Input() label = '';
  @Input() options: KeyValuePair<number, string>[] = [];
  @Input() isNullValueSelectable = false;
  @Input() defaultSelected: number | null = null;

  @Output() selectedOption = new EventEmitter<number | null>();

  untypedFormGroup: UntypedFormGroup | undefined;

  constructor(private readonly untypedFormBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.onSelectOption(this.defaultSelected);
  }

  getSelectedOptionValue(): string {
    const selectedOptionValue = this.untypedFormGroup?.getRawValue()
      .option as number;

    if (selectedOptionValue === null) {
      return '°';
    }

    const index = this.options.findIndex(
      (option) => option.key === selectedOptionValue
    );

    return this.options[index].value;
  }

  onSelectOption(optionKey: number | null): void {
    this.untypedFormGroup?.patchValue({
      option: optionKey,
    });

    this.selectedOption.emit(optionKey);
  }

  private initForm(): void {
    this.untypedFormGroup = this.untypedFormBuilder.group({
      option: [null, []],
    });
  }
}
