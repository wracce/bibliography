import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLendingListComponent } from './book-lending-list.component';

describe('BookLendingListComponent', () => {
  let component: BookLendingListComponent;
  let fixture: ComponentFixture<BookLendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLendingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
