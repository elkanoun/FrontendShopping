import { Component, OnInit, AfterContentInit } from '@angular/core';

declare const bestSellerSlider:any;
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit ,AfterContentInit{

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit(){
    bestSellerSlider();
  }

}
