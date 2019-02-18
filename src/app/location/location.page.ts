import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NavController, Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
	map: any;
	markers: any;
	padarias =[
	{nome: 'Restaurante e Pnificadora Modelo',
	lat:-5.091721,
	lng:-42.813623},
	{nome: 'Modelo Campos Sales',
	lat:-5.084293,
	lng:-42.845908},
	{nome: 'Alimentar',
	lat:-5.095978,
	lng:-42.799370},
	{nome: 'Cristo Rei',
	lat:-5.097414,
	lng:-42.789276},
	{nome: 'Ideal',
	lat:-5.077525,
	lng:-42.794664},
	{nome: 'Sal e Brisa',
	lat:-5.077528,
	lng:-42.801597},
	{nome: 'Fortaleza',
	lat:-5.076315,
	lng:-42.811296}];

  constructor(public navCtrl: NavController, private platform: Platform, public geolocation: Geolocation) { }

  ngOnInit() {
  	this.platform.ready().then(()=>{
  	this.initPage();
  	})
  }

  initPage(){
  this.geolocation.getCurrentPosition().then(result=>{
  this.loadMap(result.coords.latitude, result.coords.longitude)
  	})
  }

  loadMap(lat, lng){
  	let latLng = new google.maps.LatLng(lat, lng);
  	let mapOption = {
  	center: latLng,
  	zoom: 14,
  	mapTypeId: google.maps.MapTypeId.ROADMAP,
  	disableDefaultUI: true
  }
  	let element = document.getElementById('map');
  	this.map = new google.maps.Map(element, mapOption);
  	let marker = new google.maps.Marker({
  		position: latLng,
  		title: 'Você',
  		icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
  	})
  	let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
    this.addInfoWindow(marker, content)  
  	marker.setMap(this.map);

  	this.loadPoints();

  }

  addInfoWindow(marker, content) {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.goToEmpresa(marker)
          });
        });
      })
}

loadPoints() {
      this.markers = [];
      for (const key of Object.keys(this.padarias)) {
        console.log(this.padarias[key].nome )
        let latLng = new google.maps.LatLng(this.padarias[key].lat, this.padarias[key].lng);

        let marker = new google.maps.Marker({
          position: latLng,
          title: this.padarias[key].nome,
          icon: 'https://i.imgur.com/T43eu9X.png',
        })

        let content = `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>`+this.padarias[key].nome+`</h6>
            </ion-row>
          </ion-item>
        </div>
        `
        ;
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
      }
      return this.markers;
}
	goToEmpresa(empresa) {
	      alert('Click');
	}

}
