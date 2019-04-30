import { Component } from '@angular/core';

/**
 * Generated class for the TelaDashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tela-dashboard',
  templateUrl: 'tela-dashboard.html'
})
export class TelaDashboardComponent {

  text: string;

  constructor() {
    console.log('Hello TelaDashboardComponent Component');
    this.text = 'Hello World';
  }

}
