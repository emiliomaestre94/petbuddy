import { NuevoanimalPage } from './../nuevoanimal/nuevoanimal';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.deal = "ofertas";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil2Page');
  }
  nuevoAnimal(){
    this.navCtrl.push(NuevoanimalPage);
  }

}
