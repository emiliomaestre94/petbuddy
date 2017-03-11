import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-intro-tienda',
  templateUrl: 'intro-tienda.html'
})
export class IntroTiendaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ){
    /*
    setTimeout(() => {
    
      this.redirigir();
    }, 3000);*/
   }

   redirigir(){
  this.navCtrl.push("HomePage");
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroTiendaPage');
  }

}
   