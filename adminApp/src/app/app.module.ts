import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { PlacarPage } from '../pages/placar/placar';
import { TestPage } from '../pages/test/test';
import { CadastrarPartidaPage } from '../pages/cadastrar-partida/cadastrar-partida';
import { TelaHomeComponent } from '../components/tela-home/tela-home';
import { LoginScreenComponent } from '../components/login-screen/login-screen';
import { CadastroPartidasComponent } from '../components/cadastro-partidas/cadastro-partidas';
import { MenuLateralComponent } from '../components/menu-lateral/menu-lateral';
import { PlacarOnlineComponent } from '../components/placar-online/placar-online';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    PlacarPage,
    CadastrarPartidaPage,
    TestPage,
    TelaHomeComponent,
    LoginPage,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    PlacarPage,
    CadastrarPartidaPage,
    TestPage,
    TelaHomeComponent,
    LoginPage,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
