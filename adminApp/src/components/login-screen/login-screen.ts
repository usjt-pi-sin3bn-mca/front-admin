import { Component } from '@angular/core';
import { UsuarioLogado } from '../../model/UsuarioLogado';
import { HomePage } from '../../pages/home/home';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the FormLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-screen',
  templateUrl: 'login-screen.html'
})
export class LoginScreenComponent {

  
  login: object = {
    email: "",
    senha: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastController: ToastController, public _loginProvider: LoginProvider ) {
   
  }
  async erro() {
    const toast = await this.toastController.create({
      message: "Login ou senha Invalidos!",
      duration: 2000, 
      position: 'top',
    });
    toast.present();
  }
  fazerLogin() {
    
    this._loginProvider.loginUsuario(this.login); 

    setTimeout(() =>{
      console.log("Teste", UsuarioLogado.getInstance().getUsuario());
      if(UsuarioLogado.getInstance().getUsuario()!= null){
        this.navCtrl.setRoot(HomePage);
      }
      else{
          this.erro();
      }
    }, 2000);
    
  }
   
 
}


