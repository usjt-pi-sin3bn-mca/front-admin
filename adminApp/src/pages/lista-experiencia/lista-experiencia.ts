import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroExperienciaPage } from '../cadastro-experiencia/cadastro-experiencia';
import { ExperienciaProvider } from '../../providers/experiencia/experiencia';

/**
 * Generated class for the ListaExperienciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-experiencia',
  templateUrl: 'lista-experiencia.html',
})
export class ListaExperienciaPage {
  public lista:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _experiencias: ExperienciaProvider) {
    this.showAll();
    
  }

  ionViewDidLoad() {
    this.showAll()
  }

  async showAll() {
    
    this.lista = await this._experiencias.getExperiencia();
    this.lista = this.lista.reverse();

    console.log("lista", this.lista)
  }

  openCadastroExperiencia($param) {
    this.navCtrl.setRoot(CadastroExperienciaPage);
  }

}

