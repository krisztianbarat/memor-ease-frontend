import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessedTopicListComponent } from './accessed-topic-list.component';

describe('AccessedTopicListComponent', () => {
  let component: AccessedTopicListComponent;
  let fixture: ComponentFixture<AccessedTopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessedTopicListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessedTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
