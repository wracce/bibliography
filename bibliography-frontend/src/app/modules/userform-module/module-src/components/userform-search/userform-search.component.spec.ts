import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormSearchComponent } from './userForm-search.component';

describe('UserFormSearchComponent', () => {
  let component: UserFormSearchComponent;
  let fixture: ComponentFixture<UserFormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
