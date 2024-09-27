import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AccessedTopic } from '../../models/accessed-topic.interface';

@Component({
  selector: 'app-accessed-topic-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessed-topic-list.component.html',
  styleUrls: ['./accessed-topic-list.component.scss'],
})
export class AccessedTopicListComponent {
  @Input() accessedTopics: AccessedTopic[] = [];
}
