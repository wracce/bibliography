import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddingJournalTabComponent } from './book-adding-journal-tab.component';

describe('bookAddingJournalTabComponent', () => {
  let component: BookAddingJournalTabComponent;
  let fixture: ComponentFixture<BookAddingJournalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddingJournalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAddingJournalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
