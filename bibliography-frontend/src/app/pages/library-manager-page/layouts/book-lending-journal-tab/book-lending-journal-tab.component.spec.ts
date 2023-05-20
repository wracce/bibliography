import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLendingJournalTabComponent } from './book-lending-journal-tab.component';

describe('bookLendingJournalTabComponent', () => {
  let component: BookLendingJournalTabComponent;
  let fixture: ComponentFixture<BookLendingJournalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLendingJournalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLendingJournalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
