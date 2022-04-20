import { Component, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{
  title = '&#x1D554;&#x1D559;&#x1D556;&#x1D563;&#x1D55C;&#x1D55C;&#x1D560;&#x1D557;&#x1D557;&#x1D55A;&#x1D556;';
  search = '';
  productAdded = [];
  shoppingCart=JSON.parse(localStorage.getItem('shoppingCart')) || [];
  totalQuantity=JSON.parse(localStorage.getItem('totalQuantity')) || 0;
  // totalPrice = localStorage.getItem('totalPrice') !== null ? parseFloat(localStorage.getItem('totalPrice')) : 0;
  totalPriceNoSale=JSON.parse(localStorage.getItem('totalPriceNoSale')) || 0;

  totalPrice=JSON.parse(localStorage.getItem("totalPrice")) || 0;

}
