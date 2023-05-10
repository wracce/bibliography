import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryManagerPageComponent } from './library-manager-page.component';

describe('LibraryManagerPageComponent', () => {
  let component: LibraryManagerPageComponent;
  let fixture: ComponentFixture<LibraryManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryManagerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
