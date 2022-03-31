import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import { DomainGlobModel } from 'src/app/core/models/DomainGlob.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Item } from 'src/app/core/models/Item.model';
import { GlobalService } from 'src/app/core/services/global.service';

declare const slideEffectAjax: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  menu: DomainGlobModel[];
  cart: Item[];
  totalPrice:number;

  result:any;

  constructor(
    private menuService: MenuService,
    public cartService: CartService,
    private globalService: GlobalService) {
    this.menu = [];
  }
  ngOnInit() {
    slideEffectAjax();
    this.cartService.initCart();
    this.cart = this.cartService.cart;
    this.menuService.getMenu();
    setTimeout(()=>{
      this.menu = JSON.parse(localStorage.getItem('Menu'))
    },2000)
  }

  onClickDomain(idD){
    
    console.log('Domaine => '+idD)
  }
  onClickCategory(idD,idC){
    console.log('Domain id => '+idD,' Category id => '+idC)
  }
  onClickSubCategory(idD,idC,idSC){
    console.log('Domain id => '+idD,' Category id => '+idC,' SubCategory id => '+idSC)
    // localStorage.setItem('Menu', JSON.stringify(this.menu));
  }

  findByMc(search){
    this.globalService.getRessource('http://localhost:8080/products/search/productsByKeyword?mc='+search.value.search)
    .subscribe(data=>{
      this.result = data;
    },null,()=>{
      console.log(this.result);
    })
    console.log(search.value.search);
    return 
  }
}
