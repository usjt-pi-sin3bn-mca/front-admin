import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ExperienciaProvider } from '../../providers/experiencia/experiencia';
import { ListaExperienciaPage } from '../lista-experiencia/lista-experiencia';

/**
 * Generated class for the CadastroExperienciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-experiencia',
  templateUrl: 'cadastro-experiencia.html',
})
export class CadastroExperienciaPage {
  experiencia : any ={
    data: "",
    custo:"",
    descricao: "",
    local: "",
    nome: "",
    qtdDisponivel: "",
    id:""
  }
  constructor(public toastController: ToastController, public navCtrl: NavController, public navParams: NavParams, public _providerExperiencia: ExperienciaProvider) {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Cadastro inválido",
      duration: 2000, 
      position: 'top',
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroExperienciaPage');
  }
  cadastrarExperiencia(){
    if(this.experiencia.data =="" || this.experiencia.nome =="" ||this.experiencia.custo =="" ||
      this.experiencia.descricao =="" ||this.experiencia.local =="" ||this.experiencia.qtdDisponivel =="" ){
        this.presentToast();
      }else{
        this._providerExperiencia.cadastrarExperiencia(this.experiencia);
        this.navCtrl.setRoot(ListaExperienciaPage);

      }
    
  }

}
