import { BakeryService } from './../services/bakery.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listBakery: Array<any>;

  constructor(public navCtrl: NavController, 
    public bakeryService : BakeryService) { 

      this.bakeryService.getBakeries().subscribe(
        data => {
          const obj = (data as any);
          const obj_json = JSON.parse(obj._body);
          //this.listaFilmes = new Array<any>();
          this.listBakery = obj_json;
  
          console.log( this.listBakery );
        }, error =>{
          console.log(error);
        }
      );

    }


}
