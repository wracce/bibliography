import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddingListComponent } from './book-adding-list.component';

describe('BookAddingListComponent', () => {
  let component: BookAddingListComponent;
  let fixture: ComponentFixture<BookAddingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAddingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
