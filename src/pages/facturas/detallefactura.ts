
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

//DETALLE FACTURA
@Component({
  selector: 'page-detallefactura',
  templateUrl: 'detallefactura.html',
})
export class DetallefacturaPage {
  factura;

  constructor(params: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.factura = params.data.factura;
  }
  ngOnInit(){

  }

 
}
