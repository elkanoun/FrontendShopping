import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainGlobModel } from '../models/DomainGlob.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  menuGlobal = new EventEmitter<DomainGlobModel[]>();
  isQuickView:boolean;

  menu: DomainGlobModel[];
  constructor(private http: HttpClient) {
    this.isQuickView = false;
  }
  public getRessource(url) {
    return this.http.get(url);
  }  
  public postRessource(url,data) {
    return this.http.post(url,data);
  }
}
