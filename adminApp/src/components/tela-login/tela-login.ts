import { Component } from '@angular/core';

/**
 * Generated class for the TelaLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tela-login',
  templateUrl: 'tela-login.html'
})
export class TelaLoginComponent {

  text: string;

  constructor() {
    console.log('Hello TelaLoginComponent Component');
    this.text = 'Hello World';
  }

}
