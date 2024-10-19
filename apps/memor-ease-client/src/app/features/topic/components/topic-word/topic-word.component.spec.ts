import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicWordComponent } from './topic-word.component';

describe('TopicWordComponent', () => {
  let component: TopicWordComponent;
  let fixture: ComponentFixture<TopicWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicWordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
