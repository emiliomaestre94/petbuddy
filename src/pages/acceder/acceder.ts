import { ScanStore } from './../scanstore/scanstore';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-acceder',
  templateUrl: 'acceder.html'
})
export class AccederPage {

  user: Object = {   //creamos un objeto user que va a representar un usuario tambien podria crear una clase que represente al usuario
    username: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthService,) 
    {  }


  onLogin(){
    let loader = this.loadingCtrl.create({
      content: "Iniciando sesión...",
    });
    loader.present();
    console.log(this.user);
    this.authService.login(this.user).subscribe(
        res =>{
            console.log(res);
        if(res[0]){
            if (res[0].status==200){ //todo bien
                   console.log("Acceso correcto");
                   loader.dismiss();
                   this.navCtrl.setRoot(ScanStore);
            }
        }
        else{
            if(res.status==401){      
                 setTimeout(() => {
                    loader.dismiss();
                    this.mostrarAlert('Asegúrate de haber puesto tus datos de acceso correctamente.');   
                }, 1000);
            }
        }        
      
        },
        err=>{ //Error de conexion con el servidor        
            console.log(err);
            this.mostrarAlert('Parece que hay un error en el servidor. Vuelve a intentarlo en unos minutos');
            loader.dismiss();
        },
    );
  } 

  mostrarAlert(texto:string){
    let alert = this.alertCtrl.create({
      title: 'Login Fallido',
      subTitle: texto,
      buttons: ['Aceptar']
    });
    alert.present();
  }


}
 