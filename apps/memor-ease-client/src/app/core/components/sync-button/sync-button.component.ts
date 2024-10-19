import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sync-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sync-button.component.html',
  styleUrl: './sync-button.component.scss',
})
export class SyncButtonComponent {
  @Input() label = '';
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
