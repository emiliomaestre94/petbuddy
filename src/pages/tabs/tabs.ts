import { Perfil2Page } from './../perfil2/perfil2';
import { PublicarPage } from './../publicar/publicar';
import { BuscarPage } from './../buscar/buscar';
import { HomePage } from './../home/home';


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController) {

  }

}