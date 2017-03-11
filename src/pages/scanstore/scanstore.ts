import { HomePage } from './../home/home';
import { CarritoPage } from './../carrito/carrito';
import { DetallePage } from './../detalle/detalle';
import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { BarcodeScanner } from 'ionic-native';

import {Platform, Alert} from 'ionic-angular';

import {App} from 'ionic-angular';

declare var cordova:any;


@Component({
  selector: 'page-scanstore',
  templateUrl: 'scanstore.html'
})
export class ScanStore {
  
    homePage = HomePage;

  constructor(public navCtrl: NavController, public platform: Platform, public app: App, public menu: MenuController) {
  }

  scan() {
      let ctrl  = this.navCtrl;
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            //Cuando el escaneo es correcto, me redireccionara a la pagina de la tienda
             ctrl.setRoot(HomePage);

           },
          function (error) {
              alert("El escaneo a fallado: " + error);
          },
          {
              preferFrontCamera : false, // iOS and Android
              showFlipCameraButton : false, // iOS and Android
              showTorchButton : true, // iOS and Android
              torchOn: false, // Android, launch with the torch switched on (if available)
              prompt : "Introduce el codigo dentro del area", // Android
              resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              formats : "QR_CODE,PDF_417,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true, // iOS
          }
      );
    }

    private cerrar(){
      this.app.getRootNav().setRoot(HomePage);
    }


 ngOnInit() {
    // the left menu should be disabled on the login page
    this.menu.enable(true);
  }

  carrito(){
    this.navCtrl.push(CarritoPage);
  }

}
