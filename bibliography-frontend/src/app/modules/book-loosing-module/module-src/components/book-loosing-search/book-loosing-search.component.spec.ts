import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLoosingSearchComponent } from './book-loosing-search.component';

describe('BookLoosingSearchComponent', () => {
  let component: BookLoosingSearchComponent;
  let fixture: ComponentFixture<BookLoosingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLoosingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLoosingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
