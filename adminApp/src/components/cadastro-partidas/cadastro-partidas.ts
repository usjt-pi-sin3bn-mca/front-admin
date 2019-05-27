import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello CadastroPartidasComponent Component');
    this.text = 'Hello World';
  }

}
