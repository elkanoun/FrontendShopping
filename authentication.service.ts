import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  host2:string="http://localhost:8081";
  jwt;
  username;
  roles:Array<String>;

  constructor(private http:HttpClient) { }
  login(data){
    //donnez toute la requette http
    return this.http.post(this.host2+"/login",data,{observe:'response'})
  }

  saveToken(jwt) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parsJwt();
  }
  parsJwt(){
    let jwtHelper=new JwtHelperService();
    let   objJwt=jwtHelper.decodeToken(this.jwt);
    this.username=objJwt.obj;
    this.roles=objJwt.roles;
  }
  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
    return this.roles.indexOf('USER')>=0;

  }
  isAuthenticated(){
    return this.roles;
  }
  laodToken(){
    this.jwt=localStorage.getItem('token');
    this.parsJwt();
  }

  logout() {
    localStorage.removeItem('token');
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
  
  // postRegister(data){
  //   return this.http.post()
  // }
}
