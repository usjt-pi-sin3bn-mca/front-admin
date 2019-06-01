import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
  data: any;

  constructor(public http: HttpClient) {
  }

  connectApi() {
    let url = this.baseApiPath + 'partidas/';

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log("passou", this.data);
        },
        (error) => {
          console.log("Erro no provider de partidas");
        });
    });

  }

}
