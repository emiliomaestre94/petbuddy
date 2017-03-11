import { ITestAppEnvConfiguration } from './../env-configuration/ITestAppEnvConfiguration.d';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Usuario } from './usuarios.service';
import { Headers,Response, Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx'; //para el map, catch, thow...etc
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
//estos ultimos 3 metodos son para que cuando trabajemos con observables tengamos mas funcionalidades
import { Storage } from '@ionic/storage';

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

//Añadir para variables de entorno
import {EnvConfigurationProvider} from "gl-ionic2-env-configuration";

@Injectable()
export class AuthService{
    
  environment:ITestAppEnvConfiguration; //objeto que guarda las variables de entorno
  storage = new Storage();

    constructor( public authHttp:AuthHttp,public http: Http,private envConfiguration: EnvConfigurationProvider<ITestAppEnvConfiguration>) {
        this.environment = envConfiguration.getConfig();
    }

    login(user){   
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        console.log(user.username);
        console.log(user.password);
        return this.http.post(this.environment["dominio"] + '/loginjwt', 
            JSON.stringify({username:user.username, password:user.password}), options)
            .delay(+this.environment["timeout"])
            .map((res: Response) => {
                if (res.status === 200) {
                    this.storage.set('id_token', res.json());
                    return [{ status: res.status}]
                }
                console.log(res);
            }).catch((error: any) => {
                console.log(error);
                if(error.status===401){
                     return  [{ status: error.status, json: "Usuario o contraseña incorrectos"}]
                }
                //return [{ status: error.status, json: "Error en la conexión con el servidor" }]
                return Observable.throw(new Error(error.status));
            });
    }

    getToken(){     
        let headers = new Headers({ 'content-type': 'application/json' });
        headers.append('X-Requested-With', 'XMLHttpRequest');
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        console.log("GET TOKEN");
        return this.authHttp.post(this.environment["dominio"] +'/loginjwt/info', "", options)
            .map( response => { 
               var respJson = response.json(); 
               return respJson;
            });
    }


}
  