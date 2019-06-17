import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConvenioProvider } from '../../providers/convenio/convenio';
import { CadastroConvenioPage } from '../cadastro-convenio/cadastro-convenio';

/**
 * Generated class for the ListaConvenioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-convenio',
  templateUrl: 'lista-convenio.html',
})
export class ListaConvenioPage {

  public lista:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _convenios: ConvenioProvider) {
    this.showAll();
    
    
  }

  ionViewDidLoad() {
    this.showAll()
  }
  ionViewWillEnter(){
 
    console.log("Passou aqui");
  }
  async showAll() {
    
    this.lista = await this._convenios.getAllConvenios();
    this.lista = this.lista.reverse();

    console.log("lista", this.lista)
  }

  openCadastroConvenio($param) {
    this.navCtrl.setRoot(CadastroConvenioPage);
  }
  detalhesConvenio(convenio){
    this.navCtrl.push(CadastroConvenioPage,{convnioSelecionado: convenio});
  }


}

