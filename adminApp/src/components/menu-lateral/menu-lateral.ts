import { Component } from '@angular/core';

/**
 * Generated class for the MenuLateralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-lateral',
  templateUrl: 'menu-lateral.html'
})
export class MenuLateralComponent {

  text: string;

  constructor() {
    console.log('Hello MenuLateralComponent Component');
    this.text = 'Hello World';
  }

}
