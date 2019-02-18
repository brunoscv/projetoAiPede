import { BakeryService } from './../services/bakery.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public data = [
    {
      id:1,
      nome: 'Padaria modelo',
      favoritos:0, 
    },
    {
      id:2,
      nome: 'Panificadora Alfa',
      favoritos:0, 
    },
    {
      id:3,
      nome: 'Panificadora saraiva',
      favoritos:0, 
    }
  ];

  public listBakery: Array<any>;
  
  constructor(public navCtrl: NavController, 
    public bakeryService : BakeryService) { 

      this.inicializaPadarias();

    }
  
    inicializaPadarias(){
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

    buscarPadarias(event: any){
      this.listBakery;

      let val = event.target.value;

      if (!val) {
        return;
      }


      if(val && val.trim() != ''){
        this.listBakery=this.listBakery.filter((v)=>{
          return (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } 

    }

    public addFavorito(event: any){
      var name=event.target.value;
      for(let add of this.data){
        var qtd=add.favoritos;
        if(add.nome.toLowerCase()==name.toLowerCase()){
          qtd++;
          add.favoritos=qtd;
        }else{
          console.log("Error");
        }
      }
    }


}
