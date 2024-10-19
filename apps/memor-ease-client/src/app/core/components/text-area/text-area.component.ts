import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
})
export class TextAreaComponent implements OnInit, OnChanges {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;

  @Output() valueChanges = new EventEmitter<string>();

  untypedFormGroup!: UntypedFormGroup;

  constructor(private readonly untypedFormBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.untypedFormGroup.valueChanges.subscribe((rawValue) => {
      this.valueChanges.emit(rawValue.value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['required']?.currentValue) {
      this.untypedFormGroup.get('value')?.setValidators([Validators.required]);
    }
  }

  private initForm(): void {
    this.untypedFormGroup = this.untypedFormBuilder.group({
      value: [null, []],
    });
  }
}
