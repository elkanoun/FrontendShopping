import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  shipInfo={
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    address1: '',
    address2: '',
    zipCode: '',
    telephone: '',
    useBillingAddress: ''
  };
  shipInfoValid: boolean = false;
  payInfo={
    method:'',
    nameOnCard:'',
    type:'',
    numberCard:'',
    expirationMonth:'',
    expirationYear:'',
    cvn:''
  };
  showPayInfo: boolean = false;
  billingInfo={
    firstName: 'Mustapha',
    lastName: 'EL-RHAYAMI',
    country: 'Morrocco',
    city: 'Ouazzane',
    address1: 'Rue Laadir Diour Jdad',
    address2: 'Av ibn khaldoun n°1',
    zipCode: '16200',
    telephone: '0660148797'
  }
  billingCountryName:String;
  billingCityName:String;
  shippingCountryName:String;
  shippingCityName:String;

  shippingRate:number = 0;
  cityId:number = 0;
  showCreditCart:boolean = false;

  countries:any;
  citiesOfCountry:any;
  currentCountry:any;
  currentCity:any;

  data:any;


  constructor(
    private globalServise: GlobalService,
    private cartService: CartService,
    private router:Router
    ) { 
      this.data = [];
    }
  ngOnInit() {
    this.globalServise.getRessource("http://localhost:8080/countries?page=0&size=241")
    .subscribe(data => {
      this.countries = data;
    },err=>{},()=>{
      for(let country of this.countries._embedded.countries){
        if(country.name === 'Morocco'){
          this.getCities(country.id);
        }
      }
    });
  }
  
  selectedCountry($event){
    this.currentCountry = this.countries._embedded.countries[$event.srcElement.selectedIndex];
    this.getCities(this.currentCountry.id);
    this.shippingCountryName = this.currentCountry.name;
  }

  selectedCity($event){
    this.cityId = $event.srcElement.selectedIndex;
    this.calculershippingRate(this.cityId);
  }

  calculershippingRate(id){    
    this.currentCity = this.citiesOfCountry._embedded.cities[id];
    this.shippingCityName = this.currentCity.name;
    this.shippingRate = this.currentCity.rate * this.cartService.weightGlobale/1000;
  }


  
  getCities(id){
    this.globalServise.getRessource("http://localhost:8080/countries/"+id+"/cities")
    .subscribe(data => {
      this.citiesOfCountry = data;
    }); 
  }
  shippingInfo(data){
    this.shipInfoValid= !this.shipInfoValid;
    this.showPayInfo= !this.showPayInfo;
  }
  pymentInfo(){
    // this.data.push(this.shipInfo);
    // this.data.push(this.payInfo);
    // this.data.push(this.shippingRate);
    // this.data.push(this.cartService.cart);
    // this.data.push(this.cartService.subTotalPrice);
    // this.globalServise.postRessource('http://localhost:8080/checkout',1);
    // console.log("ok")
    this.router.navigate(['/home']); 
  }


  backToShipInfo(){
    this.shipInfoValid= !this.shipInfoValid;
    this.showPayInfo= !this.showPayInfo;
  }
}