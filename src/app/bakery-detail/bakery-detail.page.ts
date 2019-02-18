import { NavParams } from '@ionic/angular';
import { BakeryService } from './../services/bakery.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bakery-detail',
  templateUrl: './bakery-detail.page.html',
  styleUrls: ['./bakery-detail.page.scss'],
})
export class BakeryDetailPage implements OnInit {

  public listBakery: Array<any>;
  constructor(public bakeryService: BakeryService) { 
    this.bakeryService.getMenuBakeries('1').subscribe(
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

  ngOnInit() {
    
   
  }

 

}
