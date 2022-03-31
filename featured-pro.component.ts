import { Component, OnInit, AfterContentInit } from '@angular/core';

declare const featuredSlider:any;

@Component({
  selector: 'app-featured-pro',
  templateUrl: './featured-pro.component.html',
  styleUrls: ['./featured-pro.component.css']
})
export class FeaturedProComponent implements OnInit , AfterContentInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    featuredSlider();
  }

}
