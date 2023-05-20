import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddingSearchComponent } from './book-adding-search.component';

describe('BookAddingSearchComponent', () => {
  let component: BookAddingSearchComponent;
  let fixture: ComponentFixture<BookAddingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAddingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
