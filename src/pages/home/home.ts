import { ChatPage } from './../chat/chat';
import { BuscarPage } from './../buscar/buscar';
import { PublicarPage } from './../publicar/publicar';
import { PerfilPage } from './../perfil/perfil';
import { DetalleProductoPage } from './../detalle-producto/detalle-producto';
import { CarritoPage } from './../carrito/carrito';
import { DetallePage } from './../detalle/detalle';
import { Usuario, UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit} from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { ScanProduct } from '../scanproduct/scanproduct';

import { ScanStore } from '../scanstore/scanstore';

declare var cordova:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  scanProduct = ScanProduct;
  scanStore = ScanProduct;
  deal : any;
  usuarios: Usuario[];
  buscadorUsuarios: string="";
   ofertas:boolean =false;

  constructor(public menuCtrl: MenuController, public usuariosService: UsuariosService, public navCtrl: NavController,) {
    this.deal = "ofertas";
  }
 toogle(){
   this.ofertas=!this.ofertas;
 }
    navegarPublicar(){
      this.navCtrl.parent.select(2); //Publicar. 
    }
    navegarBuscar(){
      this.navCtrl.parent.select(1); //Buscar. 
    }

    irachat(){
      this.navCtrl.push(ChatPage);
    }


     scan() {
      let ctrl  = this.navCtrl;
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            //Cuando el escaneo es correcto, me redireccionara a la pagina de detalle producto
            //result.text
            ctrl.setRoot(DetalleProductoPage);

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
              disableAnimations : true // iOS
          }
      );
    }

  ngOnInit() {
    console.log("Entra en el ngOnInit");
    
    this.usuariosService.getUsers().subscribe(
      users => {
        this.usuarios=users;
      }
    );
  }
  carrito(){
    this.navCtrl.push(CarritoPage);
  }

  


}
