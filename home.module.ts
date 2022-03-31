import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { ContainerServicesComponent } from './container-services/container-services.component';
import { FeaturedProComponent } from './featured-pro/featured-pro.component';
import { MagikSlideshowComponent } from './magik-slideshow/magik-slideshow.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MiddleSliderComponent } from './middle-slider/middle-slider.component';
import { OfferBannerSectionComponent } from './offer-banner-section/offer-banner-section.component';
import { PromoBannerSectionComponent } from './promo-banner-section/promo-banner-section.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    ContainerServicesComponent,
    FeaturedProComponent,
    MagikSlideshowComponent,
    MainContainerComponent,
    MiddleSliderComponent,
    OfferBannerSectionComponent,
    PromoBannerSectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
