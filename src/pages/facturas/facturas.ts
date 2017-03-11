import { DetallefacturaPage } from './detallefactura';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//FACTURA
@Component({
  selector: 'page-facturas',
  templateUrl: 'facturas.html',
})

export class FacturasPage {
  facturas = [];

  constructor(public navCtrl: NavController) {
    this.facturas = [
      {
        'title': 'Mercadona',
        'id':'013432143441234',
        'direccion': 'C/: Princesa Mercedes Nº12',
        'cif':'A46103834',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'fecha': '17-01-1985',
        'hora': '12:00',
        'importe': '10,99€',
        'imagen':'assets/img/MercadonaLogo.jpg'
      },
      {
        'title': 'Billabong',
        'id':'B01',
        'direccion': 'C/: Auso y Monzo Nº24',
        'fecha': '17-02-1985',
        'cif':'A46103834',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '13:00',
        'importe': '299,65€',
        'imagen':'assets/img/BillabongLogo.jpg'
      },
      {
        'title': 'Primark',
        'id':'P01',
        'direccion': 'C/: Castaños Nº6',
        'fecha': '17-03-1985',
        'cif': 'B83875427',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '14:00',
        'importe': '3550,68€',
        'imagen':'assets/img/PrimarkLogo.jpg'
      },
      {
        'title': 'QuickSilver',
        'id':'Q01',
        'direccion': 'C/: Sin Francisco Franco Nº1',
        'fecha': '17-04-1985',
        'cif': 'B83875427',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '15:00',
        'importe': '890,78€',
        'imagen':'assets/img/QuickSilverLogo.jpg'
      },
      {
        'title': 'Dia',
        'id':'D01',
        'direccion': 'C/: Camilo Jose Cela Nº15',
        'fecha': '17-05-1985',
        'cif': 'B83875427',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '16:00',
        'importe': '5,05€',
        'imagen':'assets/img/DiaLogo.jpg'
      },
      {
        'title': 'DC',
        'id':'D01',
        'direccion': 'C/: España Nº12',
        'fecha': '17-06-1985',
        'cif': 'B83875427',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '17:00',
        'importe': '0,89€',
        'imagen':'assets/img/DCLogo.jpg'
      },
      {
        'title': 'Consum',
        'id':'C01',
        'direccion': 'C/: Don Bosco S/N',
        'fecha': '17-07-1985',
        'cif':'A07033699',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '18:00',
        'importe': '7897,89€',
        'imagen':'assets/img/ConsumLogo.jpg'
      },
      {
        'title': 'El Corte Ingles',
        'id':'E01',
        'direccion': 'C/: Alfonso X El Sabio Nº1',
        'fecha': '17-08-1985',
        'cif': 'A28017895',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '19:00',
        'importe': '999,99€',
        'imagen':'assets/img/ElcorteinglesLogo.jpg'
      },
      {
        'title': 'Eroski',
        'id':'E01',
        'direccion': 'C/: Goya Nº250',
        'fecha':'17-09-1985',
        'cif': 'F20033361',
        'provincia':'Alicante',
        'ciudad':'Alicante',
        'cp':'03005',
        'tlf':'625 01 02 03',
        'hora': '20:00',
        'importe': '10,23€',
        'imagen':'assets/img/EroskiLogo.jpg'
      },
    ]
  }

  abrirDetalleFactura(factura) {
    this.navCtrl.push(DetallefacturaPage , { factura: factura });
  }

}