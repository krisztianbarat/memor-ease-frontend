import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicCreateFormComponent } from './topic-create-form.component';

describe('TopicCreateFormComponent', () => {
  let component: TopicCreateFormComponent;
  let fixture: ComponentFixture<TopicCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicCreateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
