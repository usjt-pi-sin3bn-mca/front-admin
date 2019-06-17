import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConvenioProvider } from '../../providers/convenio/convenio';
import { ListaConvenioPage } from '../lista-convenio/lista-convenio';

/**
 * Generated class for the CadastroConvenioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-convenio',
  templateUrl: 'cadastro-convenio.html',
})
export class CadastroConvenioPage {

  convenio : any ={
    nome: "",
    nomeReponsavel: "",
    cpf: "",
    fone: "",
    email: "",
    endereco:"",
    pontuacaoQRCode: "",
    id:""
  }
  existente : boolean = false;
  text: string;

  constructor( public navCtrl: NavController, public navParams: NavParams, public _providerCovenio : ConvenioProvider) {
   if( this.navParams.get("convnioSelecionado")!= null){
      this.convenio = this.navParams.get("convnioSelecionado");
      this.existente = true;
   }
  }

  cadastrarConvenio(){
    setTimeout(() =>{
      this._providerCovenio.cadastrarConvenio(this.convenio);
     this.navCtrl.setRoot(ListaConvenioPage);
    }, 2000);
    
  }
  alterarConvenio(){
    setTimeout(() =>{
      this._providerCovenio.alterarConvenio(this.convenio.id,this.convenio);
      this.navCtrl.setRoot(ListaConvenioPage);
    }, 2000);
   
  }
  excluirConvenio(){
    setTimeout(() =>{
      this._providerCovenio.deletarConvenio(this.convenio.id);
      this.navCtrl.setRoot(ListaConvenioPage);
    }, 5000);
  
  }

}
