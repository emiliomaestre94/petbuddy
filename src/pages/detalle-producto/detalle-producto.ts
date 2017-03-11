import { CarritoPage } from './../carrito/carrito';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the DetalleProducto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-producto',
  templateUrl: 'detalle-producto.html'
})
export class DetalleProductoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

   carrito(){
    this.navCtrl.push(CarritoPage);
  }

  public cantidad: number = 1;


  increment(e) {
    this.cantidad++;
  }

  decrement(e) {
    if(this.cantidad > 0){
      this.cantidad--;
    }
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Producto añadido al carrito',
      duration: 3000
    });
    toast.present();
  }

}
