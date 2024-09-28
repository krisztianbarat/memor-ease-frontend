import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { KeyValuePair } from '../../stores/dictionary/models/key-value-pair.interface';

@Component({
  selector: 'app-single-selector-autocomplete',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-selector-autocomplete.component.html',
  styleUrl: './single-selector-autocomplete.component.scss',
})
export class SingleSelectorAutocompleteComponent {
  @Input() label = '';
  @Input() options: KeyValuePair<number, string>[] = [];

  onKeyPress(e: any): void {
    console.log(e);
  }
}
