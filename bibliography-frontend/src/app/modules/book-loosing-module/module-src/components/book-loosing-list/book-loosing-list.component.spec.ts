import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLoosingListComponent } from './book-loosing-list.component';

describe('BookLoosingListComponent', () => {
  let component: BookLoosingListComponent;
  let fixture: ComponentFixture<BookLoosingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLoosingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLoosingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
