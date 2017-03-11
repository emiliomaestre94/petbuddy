import { PrincipalPage } from './../principal/principal';
import { AuthService } from './../../services/auth.service';
import { Perfil2Page } from './../perfil2/perfil2';
import { PublicarPage } from './../publicar/publicar';
import { BuscarPage } from './../buscar/buscar';
import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';

import { Component } from '@angular/core';
import { NavController, AlertController, Platform, LoadingController } from 'ionic-angular';


/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = BuscarPage;
  tab3Root: any = PublicarPage;
  tab4Root: any = Perfil2Page;
  storage = new Storage();
 nombreTienda;
  constructor(public platform: Platform, private alertCtrl: AlertController, public loadingCtrl: LoadingController,public authService: AuthService,public navCtrl: NavController) {
    //Para coger los datos del token
    this.storage.ready().then(() => {
      this.storage.get('id_token').then((nombre_tienda) => {
        this.nombreTienda = nombre_tienda;
        console.log(this.nombreTienda);
      });
    });
  }

 


}