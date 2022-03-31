import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../core/services/global.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  isGrid: boolean;
  isDetail: boolean = false;
  isQuickView: boolean = false;

  param: string;
  id: number;
  result: any;
  product: any;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService) {
    this.isGrid = true;

   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.param = params.get('param');
      this.id = +params.get('id');
      this.getProduct(this.param,this.id);
    })
  }


  getProduct(param: string,id: number){
    this.productService.getCatalogue(param,id).subscribe(data=>{
      this.result = data;
    },err=>{
      console.log(err)
    });
  }
  productDetail(p){
    // this.isDetail = true;
    this.isQuickView = true;
    this.globalService.isQuickView = true;
    this.product = p;
  }

  productQuickView(p){
    this.product = p;
  }


}
