import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformListComponent } from './userform-list.component';

describe('UserformListComponent', () => {
  let component: UserformListComponent;
  let fixture: ComponentFixture<UserformListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
