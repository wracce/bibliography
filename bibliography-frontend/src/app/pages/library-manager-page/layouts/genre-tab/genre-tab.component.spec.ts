import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreTabComponent } from './genre-tab.component';

describe('GenreTabComponent', () => {
  let component: GenreTabComponent;
  let fixture: ComponentFixture<GenreTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
