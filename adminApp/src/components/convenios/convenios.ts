import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConvenioProvider } from '../../providers/convenio/convenio';

/**
 * Generated class for the ConveniosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'convenios',
  templateUrl: 'convenios.html'
})
export class ConveniosComponent {
  convenio : any ={
    nome: "",
    nomeReponsavel: "",
    cpf: "",
    fone: "",
    email: "",
    endereco:"",
    pontuacaoQRCode: ""
  }
  text: string;

  constructor( public navCtrl: NavController, public _providerCovenio : ConvenioProvider) {
      
  }

  cadastrarConvenio(){
    this._providerCovenio.cadastrarConvenio(this.convenio);
  }


}
