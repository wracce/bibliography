import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUserPageComponent } from './library-user-page.component';

describe('LibraryUserPageComponent', () => {
  let component: LibraryUserPageComponent;
  let fixture: ComponentFixture<LibraryUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
