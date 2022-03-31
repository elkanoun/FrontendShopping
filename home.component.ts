import { Component, OnInit, AfterContentInit } from '@angular/core';

declare const slideEffectAjax:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
    slideEffectAjax();
  }

  ngAfterContentInit(){
  }

}
