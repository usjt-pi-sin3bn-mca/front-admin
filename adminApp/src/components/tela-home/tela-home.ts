import { Component } from '@angular/core';

/**
 * Generated class for the TelaHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tela-home',
  templateUrl: 'tela-home.html'
})
export class TelaHomeComponent {

  text: string;

  constructor() {
    console.log('Hello TelaHomeComponent Component');
    this.text = 'Hello World';
  }

}
