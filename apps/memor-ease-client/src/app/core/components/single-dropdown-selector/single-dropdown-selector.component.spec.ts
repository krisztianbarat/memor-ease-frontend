import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleSelectorAutocompleteComponent } from './single-dropdown-selector.component';

describe('SingleSelectorAutocompleteComponent', () => {
  let component: SingleSelectorAutocompleteComponent;
  let fixture: ComponentFixture<SingleSelectorAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSelectorAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleSelectorAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
