import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  private baseURL = "https://my-json-server.typicode.com/brunoscv/bakery/";

  constructor( public http: Http) { }

  public getBakeries() {
    return this.http.get(this.baseURL + "bakeries");
  }

  public getMenuBakeries(id: string) {
    return this.http.get(this.baseURL + "bakery_menu?bakeryId=" + id);
  }


}
