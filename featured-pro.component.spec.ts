import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProComponent } from './featured-pro.component';

describe('FeaturedProComponent', () => {
  let component: FeaturedProComponent;
  let fixture: ComponentFixture<FeaturedProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
