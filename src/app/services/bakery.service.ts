import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  private baseURL = "https://api.myjson.com/bins/";

  constructor( public http: Http) { }

  public getBakeries() {
    return this.http.get(this.baseURL + "17dar4");
  }

  public getMenuBakeries() {
    return this.http.get(this.baseURL + "17dar4");
  }


}
