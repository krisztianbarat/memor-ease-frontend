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
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit, OnChanges {
  @Input() type: 'text' | 'number' = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() description = '';
  @Input() required = false;

  @Output() valueChanges = new EventEmitter<string | number>();

  untypedFormGroup!: UntypedFormGroup;

  constructor(private readonly untypedFormBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.untypedFormGroup.valueChanges.subscribe(() => {
      const value = this.getValue();
      this.valueChanges.emit(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleRequired(changes?.['isRequired']?.currentValue ?? false);
  }

  private initForm(): void {
    this.untypedFormGroup = this.untypedFormBuilder.group({
      value: new UntypedFormControl(
        null,
        this.required ? [Validators.required] : []
      ),
    });

    this.handleRequired(false);
  }

  private handleRequired(required: boolean) {
    const formControl = this.untypedFormGroup?.get('value');
    if (formControl) {
      formControl.setValidators(required ? [Validators.required] : []);
      formControl.updateValueAndValidity();
    }
  }

  private getValue(): string | number {
    const value = this.untypedFormGroup.get('value')?.value;
    if (this.type === 'number') {
      return +value as number;
    }

    return value as string;
  }
}
