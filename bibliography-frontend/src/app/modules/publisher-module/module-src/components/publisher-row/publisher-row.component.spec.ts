import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherRowComponent } from './publisher-row.component';

describe('PublisherRowComponent', () => {
  let component: PublisherRowComponent;
  let fixture: ComponentFixture<PublisherRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
