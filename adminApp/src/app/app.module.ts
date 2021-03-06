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
import { HttpModule } from '@angular/http';
import { PlacarPage } from '../pages/placar/placar';
import { TestPage } from '../pages/test/test';
import { CadastrarPartidaPage } from '../pages/cadastrar-partida/cadastrar-partida';
import { TelaHomeComponent } from '../components/tela-home/tela-home';
import { LoginScreenComponent } from '../components/login-screen/login-screen';
import { CadastroPartidasComponent } from '../components/cadastro-partidas/cadastro-partidas';
import { MenuLateralComponent } from '../components/menu-lateral/menu-lateral';
import { PlacarOnlineComponent } from '../components/placar-online/placar-online';
import { LoginPage } from '../pages/login/login';
import { ProviderPartidasProvider } from '../providers/provider-partidas/provider-partidas';
import { ListaPartidasPage } from '../pages/lista-partidas/lista-partidas';
import { PlacarOnlinePage } from '../pages/placar-online/placar-online';
import { ConvenioProvider } from '../providers/convenio/convenio';
import { ExperienciaProvider } from '../providers/experiencia/experiencia';
import { UserProvider } from '../providers/user/user';
import { CadastroConvenioPage } from '../pages/cadastro-convenio/cadastro-convenio';
import { ConveniosComponent } from '../components/convenios/convenios';
import { ListaConvenioPage } from '../pages/lista-convenio/lista-convenio';
import { ListaExperienciaPage } from '../pages/lista-experiencia/lista-experiencia';
import { CadastroExperienciaPage } from '../pages/cadastro-experiencia/cadastro-experiencia';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    PlacarPage,
    ListaPartidasPage,
    CadastrarPartidaPage,
    CadastroConvenioPage,
    TestPage,
    TelaHomeComponent,
    LoginPage,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent,
    PlacarOnlinePage,
    ConveniosComponent,
    ListaConvenioPage,
    ListaExperienciaPage,
    CadastroExperienciaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    PlacarPage,
    ListaPartidasPage,
    CadastrarPartidaPage,
    PlacarOnlinePage,
    TestPage,
    TelaHomeComponent,
    LoginPage,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent,
    CadastroConvenioPage,
    ConveniosComponent,
    ListaConvenioPage,
    ListaExperienciaPage,
    CadastroExperienciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderPartidasProvider,
    ConvenioProvider,
    ExperienciaProvider,
    UserProvider,
    LoginProvider
  ]
})
export class AppModule {}
