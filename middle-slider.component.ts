import { Component, OnInit, AfterContentInit } from '@angular/core';

declare const shoesSlider:any;
declare const bagSellerSlider:any;

@Component({
  selector: 'app-middle-slider',
  templateUrl: './middle-slider.component.html',
  styleUrls: ['./middle-slider.component.css']
})
export class MiddleSliderComponent implements OnInit , AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    shoesSlider();
    bagSellerSlider();
  }

}
