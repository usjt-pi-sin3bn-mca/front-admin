import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

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

  constructor(public http: HttpClient, public navCtrl: NavController) {
    this.connectApi();
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
    console.log("Request feito");
    this.partidaEmAndamento = true;
  }

}
