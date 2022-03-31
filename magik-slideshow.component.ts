import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DomainGlobModel } from 'src/app/core/models/DomainGlob.model';
import { GlobalService } from 'src/app/core/services/global.service';

declare const slidShowTest: any;

@Component({
  selector: 'app-magik-slideshow',
  templateUrl: './magik-slideshow.component.html',
  styleUrls: ['./magik-slideshow.component.css']
})
export class MagikSlideshowComponent implements OnInit, AfterContentInit {


  rhsBanner: number = 2;
  menu: DomainGlobModel[];
  constructor(private globalService: GlobalService) {
    this.menu = [];
  }

  ngOnInit() {
    setTimeout(() => {
      this.menu = JSON.parse(localStorage.getItem('Menu'));
    }, 2000)
  }
  ngAfterContentInit() {
    slidShowTest();
  }

  onClick() {
    this.globalService.menuGlobal.subscribe((domGlob: DomainGlobModel[]) => {
      this.menu = domGlob;
    });
  }

}
