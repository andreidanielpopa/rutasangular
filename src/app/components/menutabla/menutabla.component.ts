import { Component } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  templateUrl: './menutabla.component.html',
  styleUrl: './menutabla.component.css'
})
export class MenutablaComponent {
  public numeros: Array<number>;

  constructor() {
    this.numeros = [6, 3, 7, 1, 8];
  }

}
