import { BakeryDetailPage } from './../bakery-detail/bakery-detail.page';
import { BakeryService } from './../services/bakery.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listBakery: Array<any>;

  constructor(public navCtrl: NavController, 
    public bakeryService : BakeryService,
    private router: Router) { 

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

  bakeryMenu(id) {
    this.navCtrl.navigateForward('bakery-detail');
    console.log();
  }


}
