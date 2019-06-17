import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { ProviderPartidasProvider } from '../../providers/provider-partidas/provider-partidas';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the CadastroPartidasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro-partidas',
  templateUrl: 'cadastro-partidas.html'
})
export class CadastroPartidasComponent {
  private baseApiPath = 'http://jazz.lucasduarte.club/api/';
  public apiResult: any;
  listaPartidas: any;
  partidaAtual: any;
  idPartidaAtual: number;
  dataObj: any;

  partidaEmAndamento: boolean = false;

  //variables of body request
  campeonato : object = {id: 1};
  campeonatoNome : string;
  timeB : string;
  visitante : any;
  descricao : string;
  local : string;
  data : any;
  hora : any;
  desafioA : 0;
  desafioB : 0;
  urlLogoAdv : string;
  ganhadorPartida : string;
  partidaIniciada : boolean;
  partidaFinalizada : boolean;

  bodyRequest: object = {
    "campeonato": {"id": 1},
    "timeB" : this.timeB,
    "visitante" : "false",
    "descricao" : "Partida teste",
    "local" : this.local,
    "data" : this.data,
    "desafioA" : 0,
    "desafioB" : 0,
    "urlLogoAdv" : this.urlLogoAdv,
    "ganhadorPartida" : "São Judas",
    "partidaIniciada" : "true",
    "partidaFinalizada" : "false",
  }

  constructor(public http: HttpClient, public navCtrl: NavController, public _providerPartidas: ProviderPartidasProvider) {
    this._providerPartidas.getAllPartidas();
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
          this.dataObj = dataObj;
          resolve(this.dataObj);
          console.log("passou", this.dataObj);
        },
        (error) => {
          console.log("Erro no provider de partidas");
        });
    });

  }

  sendRequest() {
    this._providerPartidas.criarPartida(this.bodyRequest);
    console.log("Request feito", this.bodyRequest);
    alert("Partida criada com sucesso!");
    this.navCtrl.setRoot(HomePage);
  }

}

