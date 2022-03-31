import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    username:'',
    password:''
  }
  
  loginInvalid: boolean = false;

  userInfo={
    firstName: '',
    lastName: '',    
    email:'',
    country: '',
    city: '',
    address1: '',
    address2: '',
    zipCode: '',
    telephone: '',
    password: '',
    confirm: ''
  };

  nweUser:boolean = false;
  countries:any;
  citiesOfCountry:any;
  currentCountry:any;
  passShow: boolean = false;
  inputType: string = 'password'

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private globalServise: GlobalService
  ) {
    this.user={
      username:'',
      password:''
    }
   }

   ngOnInit() {
    this.globalServise.getRessource("http://localhost:8080/countries?page=0&size=241")
    .subscribe(data => {
      this.countries = data;
    },err=>{},()=>{
      for(let country of this.countries._embedded.countries){
        if(country.name === 'Morocco'){
          this.getCities(country.id);
          // this.shipInfo.country = country.name === 'Morocco'? country.id: '';
          console.log(this.userInfo.country)
        }
      }
    });
  }
  
  selectedCountry($event){
    this.currentCountry = this.countries._embedded.countries[$event.srcElement.selectedIndex];
    this.getCities(this.currentCountry.id);
  }
  
  getCities(id){
    this.globalServise.getRessource("http://localhost:8080/countries/"+id+"/cities")
    .subscribe(data => {
      this.citiesOfCountry = data;
    }); 
  }

  onLogin(data) {
    // console.log(data);
    // this.authService.login(data)
    //   .subscribe(resp => {
    //     let jwt = resp.headers.get('authorization');
    //     this.authService.saveToken(jwt);
    //     this.router.navigateByUrl('/');

    //     console.log(jwt)
    //   }, err => {
    //     console.log(err);
    //   })
    console.log(data);
    // routerLink="/catalog/checkout"
    if(this.user.username == "user1" && this.user.password == "1234"){
      this.router.navigate(['/catalog/checkout']);   
      this.loginInvalid = false;
      console.log('truuuuuuuuuuuuuuuuuee');
    }else{
      this.loginInvalid = true;
      console.log('false');
    }

  }

  registerInfo(registerForm){
    console.log(registerForm.value);
  }


    

}
