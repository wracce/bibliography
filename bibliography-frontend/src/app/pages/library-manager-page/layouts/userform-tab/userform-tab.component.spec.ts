import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformTabComponent } from './userform-tab.component';

describe('UserformTabComponent', () => {
  let component: UserformTabComponent;
  let fixture: ComponentFixture<UserformTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
