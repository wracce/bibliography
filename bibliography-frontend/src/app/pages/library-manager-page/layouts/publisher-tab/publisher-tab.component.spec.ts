import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherTabComponent } from './publisher-tab.component';

describe('PublisherTabComponent', () => {
  let component: PublisherTabComponent;
  let fixture: ComponentFixture<PublisherTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
