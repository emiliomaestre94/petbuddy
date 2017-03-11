import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {ElementRef,ViewChild, Renderer,} from '@angular/core';



/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage{
  
//@ViewChild('inputvariable') el:ElementRef;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private rd: Renderer
   ) {}


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

 ngOnInit() {
   // this.rd.invokeElementMethod(this.el.nativeElement,'focus');
  }

  SeleccionarGaleria(){
 let actionSheet = this.actionSheetCtrl.create({
      title: 'Imagen de perfil',
      buttons: [
        {
          text: 'Galería',
          role: 'destructive',
          icon: 'image',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  
  }

}
 