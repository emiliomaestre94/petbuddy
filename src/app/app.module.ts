import { ChatPage } from './../pages/chat/chat';
import { NuevoanimalPage } from './../pages/nuevoanimal/nuevoanimal';
import { Perfil2Page } from './../pages/perfil2/perfil2';
import { PublicarPage } from './../pages/publicar/publicar';
import { BuscarPage } from './../pages/buscar/buscar';
import { TabsPage } from './../pages/tabs/tabs';
import { AuthService } from './../services/auth.service';
import { IntroTiendaPage } from './../pages/intro-tienda/intro-tienda';
import { DetalleProductoPage } from './../pages/detalle-producto/detalle-producto';
import { PagoPage } from './../pages/pago/pago';
import { CarritoPage } from './../pages/carrito/carrito';
import { PerfilPage } from './../pages/perfil/perfil';
import { RegistroPage } from './../pages/registro/registro';
import { AccederPage } from './../pages/acceder/acceder';
import { PrincipalPage } from './../pages/principal/principal';
import { MapaInfoPage } from './../pages/mapa-info/mapa-info';
import { MapaPage } from './../pages/mapa/mapa';
import { SlidesPage } from './../pages/slides/slides';
import { DetallefacturaPage } from './../pages/facturas/detallefactura';
import { FacturasPage} from './../pages/facturas/facturas';
import { UsuariosService } from './../services/usuarios.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ScanProduct } from '../pages/scanproduct/scanproduct';
import { ScanStore } from '../pages/scanstore/scanstore';

import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration'; //Para las variables de entorno

//PARA TOKENS
import { AUTH_PROVIDERS, AuthHttp, AuthConfig} from 'angular2-jwt';
import { provideAuth } from 'angular2-jwt';
import { HttpModule,Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
let storage = new Storage();
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
         tokenGetter: (() => storage.get('id_token')),
        globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}


//FIN TOKENS

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanProduct,
    ScanStore,
    FacturasPage,
    DetallefacturaPage,
    SlidesPage,
    MapaPage,
    MapaInfoPage,
    PrincipalPage,
    AccederPage,
    RegistroPage,
    PerfilPage,
    CarritoPage,
    PagoPage,
    DetalleProductoPage,
    IntroTiendaPage,
    TabsPage,
    BuscarPage,
    PublicarPage,
    Perfil2Page,
    NuevoanimalPage,
    ChatPage
      ],
  imports: [
    IonicModule.forRoot(MyApp),
    GLIonic2EnvConfigurationModule // cargar variables de entorno
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanProduct,
    ScanStore,
    FacturasPage,
    DetallefacturaPage,
    SlidesPage,
    MapaPage,
    MapaInfoPage,
    PrincipalPage,
    AccederPage,
    RegistroPage,
    PerfilPage,
    CarritoPage,
    PagoPage,
    DetalleProductoPage,
    IntroTiendaPage,
    TabsPage,
    BuscarPage,
    PublicarPage,
    Perfil2Page,
    NuevoanimalPage,
    ChatPage
  ],
  providers: 
  [
      {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    UsuariosService,
    AuthService
  ]
})
export class AppModule {}
