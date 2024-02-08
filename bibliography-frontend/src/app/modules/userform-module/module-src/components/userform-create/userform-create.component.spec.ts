import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformCreateComponent } from './userform-create.component';

describe('UserformCreateComponent', () => {
  let component: UserformCreateComponent;
  let fixture: ComponentFixture<UserformCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
