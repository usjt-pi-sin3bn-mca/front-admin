import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderPartidasProvider } from '../../providers/provider-partidas/provider-partidas';
import { CadastrarPartidaPage } from '../cadastrar-partida/cadastrar-partida';

/**
 * Generated class for the ListaPartidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-partidas',
  templateUrl: 'lista-partidas.html',
  providers: [ProviderPartidasProvider]
})
export class ListaPartidasPage {
  public lista:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _partidas: ProviderPartidasProvider) {
    this.showAll();
    
  }

  ionViewDidLoad() {
    
  }

  async showAll() {
    
    this.lista = await this._partidas.getAllPartidas();
    this.lista = this.lista.reverse();

    console.log("lista", this.lista)
  }

  openCadastroPartidas($param) {
    this.navCtrl.setRoot(CadastrarPartidaPage);
  }
}
