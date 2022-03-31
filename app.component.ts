import { Component, DoCheck } from '@angular/core';
import { GlobalService } from './core/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  title = 'app';
  isQuickView: boolean;
  constructor(private globalService: GlobalService){
    this.isQuickView = false;
    // this.router.routeReuseStrategy.shouldReuseRoute = function(){
    //   return false;
    // }
  }

  ngOnInit(): void {
    this.isQuickView = this.globalService.isQuickView
  }
  
  ngDoCheck(): void {
    this.isQuickView = this.globalService.isQuickView
  }
  



}
