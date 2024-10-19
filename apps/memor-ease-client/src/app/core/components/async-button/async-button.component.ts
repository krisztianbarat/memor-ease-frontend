import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-async-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './async-button.component.html',
  styleUrl: './async-button.component.scss',
})
export class AsyncButtonComponent {
  @Input() label = '';
  @Input() disabled = false;
  @Input() isLoading = false;

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
