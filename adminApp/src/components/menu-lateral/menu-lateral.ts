import { Component } from '@angular/core';
import { UsuarioLogado } from '../../model/UsuarioLogado';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the MenuLateralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-lateral',
  templateUrl: 'menu-lateral.html'
})
export class MenuLateralComponent {
  email : any = "adm@usjt.com";
  nome  : any = "Administrador"; 
  text: string;
  
  constructor(public navCtrl: NavController) {}


    
  irHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
