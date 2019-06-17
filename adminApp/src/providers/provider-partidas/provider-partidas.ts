
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderPartidasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderPartidasProvider {
  private baseApiPath = 'http://jazz.lucasduarte.club/api/';
  public apiResult: any;
  listaPartidas: any;
  
  partidaAtual: any;
  idPartidaAtual: any;
  data: any;
  totalSets: any;
  
  constructor(public http: Http) {
  }

  getAllPartidas() {
    let url = this.baseApiPath + 'partidas/';

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          //console.log("passouUUU", this.data);
          // this.partidaAtual = data[0];
         // this.idPartidaAtual = this.partidaAtual.id;
        },
        (error) => {
          console.log("Erro no provider de partidas");
        });
    });

  }

  criarPartida(body) {

    return new Promise((resolve, reject) => {
      this.http.post(this.baseApiPath + 'partidas/', body)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  criarSet(body) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseApiPath + 'set/', body)
      .toPromise()
      .then((response) =>
      {
        console.log('API SET Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API SET Error : ', error.status);
        console.error('API SET Error : ', JSON.stringify(error));
        reject(error.json());
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
          this.totalSets = data;
          console.log("Sets ae", this.totalSets);
        },
        (error) => {
          console.log("Erro no provider de sets");
        });
    });
  }

  atualizarSet(id, body) {
    return new Promise((resolve, reject) => {
      this.http.put(this.baseApiPath + 'set/' + id, body)
      .toPromise()
      .then((response) =>
      {
        console.log('API SET ATUALIZOU Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API SET ATUALIZOU Error : ', error.status);
        console.error('API SET Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  finalizarPartida(id) {
    let url = this.baseApiPath + 'set/partidas/finalizar/' + id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');

    return new Promise((resolve, reject) => {
      this.http.put(url, headers)
      .toPromise()
      .then((response) =>
      {
        console.log('API SET ATUALIZOU Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API SET ATUALIZOU Error : ', error.status);
        console.error('API SET Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }
}