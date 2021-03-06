import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastrarPartidaPage } from '../pages/cadastrar-partida/cadastrar-partida';
import { LoginPage } from '../pages/login/login';
import { ListaPartidasPage } from '../pages/lista-partidas/lista-partidas';
import { PlacarOnlinePage } from '../pages/placar-online/placar-online';
import { CadastroConvenioPage } from '../pages/cadastro-convenio/cadastro-convenio';
import { ListaConvenioPage } from '../pages/lista-convenio/lista-convenio';
import { CadastroExperienciaPage } from '../pages/cadastro-experiencia/cadastro-experiencia';
import { ListaExperienciaPage } from '../pages/lista-experiencia/lista-experiencia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cadastrar Partida', component: CadastrarPartidaPage },
      { title: 'Lista de partidas', component: ListaPartidasPage },
      { title: 'Convênio', component: ListaConvenioPage },
      { title: 'Experiencia', component: ListaExperienciaPage },
      { title: 'Administrar placar', component: PlacarOnlinePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
