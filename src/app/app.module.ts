import { BakeryDetailPageModule } from './bakery-detail/bakery-detail.module';
import { BakeryService } from './services/bakery.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { AuthModule } from  './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, BakeryDetailPageModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AuthModule
  ],
>>>>>>> d7ffb86ee2c206b5ca3bf1d80a256b5ded91594d
  providers: [
    StatusBar,
    SplashScreen,
    BakeryService,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
