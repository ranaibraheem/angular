import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartIcon = "&#x1F6D2;";
  totalPrice =JSON.parse(localStorage.getItem('totalPrice')) || 0;
  shoppingCart=JSON.parse(localStorage.getItem('shoppingCart')) || [];
  totalQuantity=JSON.parse(localStorage.getItem('totalQuantity')) || 0;
  totalPriceNoSale=JSON.parse(localStorage.getItem('totalPriceNoSale')) || 0;
  Products=JSON.parse(localStorage.getItem('Products')) || [];

  remove() {
    this.shoppingCart.forEach(cart =>{
      cart.stock+=cart.quantity;
      cart.quantity = 0;
    })
    this.shoppingCart = [];
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.totalPriceNoSale = 0;

    localStorage.removeItem('totalQuantity');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('shoppingCart');
    localStorage.removeItem('totalPriceNoSale')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
