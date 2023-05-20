import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLendingSearchComponent } from './book-lending-search.component';

describe('BookLendingSearchComponent', () => {
  let component: BookLendingSearchComponent;
  let fixture: ComponentFixture<BookLendingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLendingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLendingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
