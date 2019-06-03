import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home'

/**
 * Generated class for the PlacarOnlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'placar-online',
  templateUrl: 'placar-online.html'
})
export class PlacarOnlineComponent {
  pontoSetAtualSJ: number = 0;
  pontoSetAtualAdversario: number = 0;

  sets: Array<any> = [
    {
      "pontoSetAtualSJ": 0,
      "pontoSetAtualAdversario": 0
    }
  ];

  setZerado: object = { "pontoSetAtualSJ": 0, "pontoSetAtualAdversario": 0 };

  constructor(public navCtrl: NavController) {
    console.log(this.sets[0].pontoSetAtualAdversario);
  }

  atualizarPlacar() {
    
  }

  adicionarSet() {
    this.sets.push(this.setZerado);
  }

  finalizarSet(id) {
    var element = document.getElementById("set-numero-" + id);
    element.classList.add("inactive");
  }

  finalizarPartida() {
    alert("A Partida foi finalizada com sucesso.");
    this.navCtrl.setRoot(HomePage);
  }

  aumentarPontoSJ($param) {
    this.sets[$param].pontoSetAtualSJ = this.sets[$param].pontoSetAtualSJ+1;
    console.log(this.pontoSetAtualSJ);
  }

  aumentarPontoAdversario($param) {
    this.sets[$param].pontoSetAtualAdversario = this.sets[$param].pontoSetAtualAdversario+1;
  }

  diminuirPontoSJ($param) {
    this.sets[$param].pontoSetAtualSJ = this.sets[$param].pontoSetAtualSJ-1;
  }

  diminuirPontoAdversario($param) {
    this.sets[$param].pontoSetAtualAdversario = this.sets[$param].pontoSetAtualAdversario-1;
  }

}
