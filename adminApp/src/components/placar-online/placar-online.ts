import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home'
import { ProviderPartidasProvider } from '../../providers/provider-partidas/provider-partidas';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

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
  idPartidaAtual: any;
  baseApiPath = 'http://jazz.lucasduarte.club/api/';
  dataObj: any;
  data: any;
  sets: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public _partidasProvider: ProviderPartidasProvider) {
    this.connectApi();
    
    //console.log("aesdsfsfsf:", this.idPartidaAtual);
  }

  connectApi() {
    let url = this.baseApiPath + 'partidas/';

    if (this.dataObj) {
      return Promise.resolve(this.dataObj);
    }

    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res)
        .subscribe(dataObj => {
          this.data = dataObj;
          resolve(this.data)
          // console.log("passou no placar", this.data);

          var idPartidaAtual;
          idPartidaAtual = this.data[0].id;
          this.idPartidaAtual = this.data[0].id;
          console.log("set sok:", this.sets);
          console.log("lala", idPartidaAtual);
          this.getSets(idPartidaAtual);
        },
        (error) => {
          console.log("Erro no provider de getSets");
        });
    });
  }
  

  getSets(id) {
    let url = this.baseApiPath + 'setPartida/?partidaId=' + id;

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res)
        .subscribe(data => {
          this.sets = data;
          console.log("Sets ae", this.sets);
        },
        (error) => {
          console.log("Erro no provider de sets");
        });
    });
  }

  atualizarPlacar() {
  }

  adicionarSet(id, pontoSJ, pontoAdv) {
    let setZerado: object = { 
      "pontoA":0,
      "pontoB":0,
      "tempoA":0,
      "tempoB":0,
      "ganhador":"",
      "setFinalizado":"false",
      "partida": {
        "id": this.idPartidaAtual
      }
     };
    // console.log("zerado", setZerado);
    this._partidasProvider.criarSet(setZerado);

  }

  finalizarSet(id, pontoSJ, pontoAdv) {
    var element = document.getElementById("set-numero-" + id);
    element.classList.add("inactive");
    this.sets[id].setFinalizado = "true";
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
