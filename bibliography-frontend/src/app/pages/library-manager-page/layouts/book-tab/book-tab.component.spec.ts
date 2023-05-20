import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTabComponent } from './book-tab.component';

describe('BookTabComponent', () => {
  let component: BookTabComponent;
  let fixture: ComponentFixture<BookTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
