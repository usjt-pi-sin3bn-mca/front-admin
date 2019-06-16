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
  conteudoAtivo: boolean = false;

  constructor(public navCtrl: NavController, public http: HttpClient, public _partidasProvider: ProviderPartidasProvider) {
    
    this.getSets();
  }


  getSets() {
    let url = this.baseApiPath + 'setPartida/?partidaId=' + this.idPartidaAtual;

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
    this.getSets();
  }

  adicionarSet() {
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
    this.getSets();

  }

  verificarId(id) {
    if (id > 0) {
      this.conteudoAtivo = true;
      this.getSets();
    }
    else {
      alert("Número inválido");
    }
  }

  finalizarSet(id, pontoSJ, pontoAdv) {
    if (this.sets[id].pontoA > this.sets[id].pontoB) {
      this.sets[id].ganhador = "Sao Judas";
    }
    else {
      this.sets[id].ganhador = "Adversário";
    }
    var element = document.getElementById("set-numero-" + id);
    element.classList.add("inactive");
    this.sets[id].setFinalizado = "true";
  }

  finalizarPartida() {
    alert("A Partida foi finalizada com sucesso.");
    this.navCtrl.setRoot(HomePage);
  }

  sendRequest(id) {
    let body = this.sets;
    body = body[id];
    console.log("body", body);
    this._partidasProvider.atualizarSet(body.id, body);
  }

  aumentarPontoSJ($param) {
    this.sets[$param].pontoA = this.sets[$param].pontoA+1;
    console.log(this.sets[$param].pontoA);
    this.sendRequest($param);
  }

  aumentarPontoAdversario($param) {
    this.sets[$param].pontoB = this.sets[$param].pontoB+1;
    this.sendRequest($param);
  }

  diminuirPontoSJ($param) {
    this.sets[$param].pontoA = this.sets[$param].pontoA-1;
    this.sendRequest($param);
  }

  diminuirPontoAdversario($param) {
    this.sets[$param].pontoB = this.sets[$param].pontoB-1;
    this.sendRequest($param);
  }

}
