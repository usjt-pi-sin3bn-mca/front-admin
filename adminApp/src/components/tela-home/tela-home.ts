import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPartidaPage } from '../../pages/cadastrar-partida/cadastrar-partida';
import { ListaPartidasPage } from '../../pages/lista-partidas/lista-partidas';
import { PlacarOnlinePage } from '../../pages/placar-online/placar-online';
import { CadastroConvenioPage } from '../../pages/cadastro-convenio/cadastro-convenio';

/**
 * Generated class for the TelaHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tela-home',
  templateUrl: 'tela-home.html'
})
export class TelaHomeComponent {


  pages: Array<{title: string, component: any}>;
  cadastrar: any = CadastrarPartidaPage;
  listaPartidas: any = ListaPartidasPage;
  placarOnline: any = PlacarOnlinePage;
  convenios: any = CadastroConvenioPage;

  
  constructor(public navCtrl: NavController) {
    // this.user.email = "";
    // this.user.senha = "";
    this.pages = [
      { title: 'Cadastrar Partida', component: CadastrarPartidaPage}
    ]
  }

  openPage($param) {
    this.navCtrl.setRoot($param);
  }

  indisponivel() {
    alert("Funcionalidade indisponível.");
  }
}
