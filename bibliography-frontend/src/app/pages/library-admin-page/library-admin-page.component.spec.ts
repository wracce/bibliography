import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminPageComponent } from './library-admin-page.component';

describe('LibraryAdminPageComponent', () => {
  let component: LibraryAdminPageComponent;
  let fixture: ComponentFixture<LibraryAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LibraryAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
