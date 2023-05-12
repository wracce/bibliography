import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherSearchComponent } from './publisher-search.component';

describe('PublisherSearchComponent', () => {
  let component: PublisherSearchComponent;
  let fixture: ComponentFixture<PublisherSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
