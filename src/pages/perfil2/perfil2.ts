import { PrincipalPage } from './../principal/principal';
import { AuthService } from './../../services/auth.service';
import { NuevoanimalPage } from './../nuevoanimal/nuevoanimal';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Perfil2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil2',
  templateUrl: 'perfil2.html'
})
export class Perfil2Page {
deal : any;
  constructor(public platform: Platform, private alertCtrl: AlertController, public loadingCtrl: LoadingController,public authService: AuthService,public navCtrl: NavController) {
    this.deal = "ofertas";
  }
 storage = new Storage();
  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil2Page');
  }
  nuevoAnimal(){
    this.navCtrl.push(NuevoanimalPage);
  }
     CerrarSesion(){
    let alert = this.alertCtrl.create({
    title: 'Cerrar sesión',
    message: '¿Estás seguro de que deseas cerrar tu sesión en Appay?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.MostrarLoading();
        }
      }
    ]
  });
  alert.present();
  }

  MostrarLoading(){
    let loader = this.loadingCtrl.create({
      content: "Cerrando sesión...",
      duration: 1000 //luego lo quitaremos 
    });
    loader.present();
    this.storage.remove('id_token');
    this.navCtrl.setRoot(PrincipalPage);
  }

}
