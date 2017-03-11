import { PagoPage } from './../pago/pago';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Carrito page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html'
})
export class CarritoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public cantidad: number = 1;

  increment(e) {
    this.cantidad++;
  }

  decrement(e) {
    if(this.cantidad > 0){
      this.cantidad--;
    }
  }
  pagar(){
    this.navCtrl.push(PagoPage);
  }

}
