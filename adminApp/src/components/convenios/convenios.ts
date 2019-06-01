import { Component } from '@angular/core';

/**
 * Generated class for the ConveniosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'convenios',
  templateUrl: 'convenios.html'
})
export class ConveniosComponent {

  text: string;

  constructor() {
    console.log('Hello ConveniosComponent Component');
    this.text = 'Hello World';
  }

}
