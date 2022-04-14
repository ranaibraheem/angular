import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  search = '';
  i=0;
  addMachine(){
    this.i++;
  }

}
