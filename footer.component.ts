import { Component, OnInit, AfterContentInit } from '@angular/core';

declare const brandLogoSlider:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit , AfterContentInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    brandLogoSlider();
  }

}
