import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
