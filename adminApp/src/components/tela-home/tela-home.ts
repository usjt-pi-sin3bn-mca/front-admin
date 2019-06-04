import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPartidaPage } from '../../pages/cadastrar-partida/cadastrar-partida';

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

  
  constructor(public navCtrl: NavController) {
    // this.user.email = "";
    // this.user.senha = "";
    this.pages = [
      { title: 'Cadastrar Partida', component: CadastrarPartidaPage}
    ]
  }

  openCadastroPartidas($param) {
    this.navCtrl.setRoot(CadastrarPartidaPage);
  }

  indisponivel() {
    alert("Funcionalidade indisponível.");
  }
}
