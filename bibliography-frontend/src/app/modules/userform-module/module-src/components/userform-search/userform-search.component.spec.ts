import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformSearchComponent } from './userform-search.component';

describe('UserformSearchComponent', () => {
  let component: UserformSearchComponent;
  let fixture: ComponentFixture<UserformSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
