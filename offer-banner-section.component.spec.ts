import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBannerSectionComponent } from './offer-banner-section.component';

describe('OfferBannerSectionComponent', () => {
  let component: OfferBannerSectionComponent;
  let fixture: ComponentFixture<OfferBannerSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBannerSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
