import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLoosingJournalTabComponent } from './book-loosing-journal-tab.component';

describe('bookLoosingJournalTabComponent', () => {
  let component: BookLoosingJournalTabComponent;
  let fixture: ComponentFixture<BookLoosingJournalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLoosingJournalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLoosingJournalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
