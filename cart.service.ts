import { Injectable } from '@angular/core';
import { Item } from '../models/Item.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[];
  item: Item;
  subTotalPrice: number = 0;
  weightGlobale: number = 0;

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient) {
    this.cart = [];
  }
  addToCart(product, qty) {
    this.item = this.cart.find(item => item.product.id === product.id);
    if (this.item === undefined) {
      this.item = new Item();
      this.item.qty = qty;
      this.item.product = product;
      this.item.price = product.promotion > 0 ? product.currentPrice * ((100 - product.promotion) / 100) : product.currentPrice;
      this.cart.push(this.item);
    } else {
      let index = this.cart.indexOf(this.item)
      this.item.qty += qty;
      this.item.price += qty * (product.promotion > 0 ? product.currentPrice * ((100 - product.promotion) / 100) : product.currentPrice);
      this.cart[index] = this.item;
    }
    this.subTotalPrice += qty * (product.promotion > 0 ? product.currentPrice * ((100 - product.promotion) / 100) : product.currentPrice);
    this.weightGlobale += product.weight * qty;
    this.saveData();

  }
  deleteItem(item, index) {
    this.subTotalPrice -= item.price;
    this.cart.splice(index, 1);
    this.saveData();
  }
  initCart() {
    this.cart = JSON.parse(localStorage.getItem('Cart')) != null ? JSON.parse(localStorage.getItem('Cart')) : [];
    this.subTotalPrice = JSON.parse(localStorage.getItem('SubTotalCart')) != null ? JSON.parse(localStorage.getItem('SubTotalCart')) : 0;
    this.weightGlobale = JSON.parse(localStorage.getItem('WeightGlobale')) != null ? JSON.parse(localStorage.getItem('WeightGlobale')) : 0;
  }
  saveData() {
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    localStorage.setItem('SubTotalCart', JSON.stringify(this.subTotalPrice));
    localStorage.setItem('WeightGlobale', JSON.stringify(this.weightGlobale));
  }
  // postShipping(data){
  //   // let header = new HttpHeaders({'authorization':this.authService.jwt});
  //   return this.http.post(url,data);
  //   // return this.http.post(url,data,{headers:header})
  // }

}