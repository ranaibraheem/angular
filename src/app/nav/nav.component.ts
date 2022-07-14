import { Component } from "@angular/core";
import { LocalService } from "../local.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})

export class NavComponent {
    title = '&#x1D554;&#x1D559;&#x1D556;&#x1D563;&#x1D55C;&#x1D55C;&#x1D560;&#x1D557;&#x1D557;&#x1D55A;&#x1D556;';
    // shoppingCart=JSON.parse(localStorage.getItem('shoppingCart')) || [];
    // totalQuantity=JSON.parse(localStorage.getItem('totalQuantity')) || 0;
    // // totalPrice = localStorage.getItem('totalPrice') !== null ? parseFloat(localStorage.getItem('totalPrice')) : 0;
    // totalPriceNoSale=JSON.parse(localStorage.getItem('totalPriceNoSale')) || 0;

    // totalPrice=JSON.parse(localStorage.getItem("totalPrice")) || 0;
    // productindex=JSON.parse(localStorage.getItem("productindex")) || 0;

    ngOnInit(): void {
      // localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
      // console.log(this.shoppingCart);
      // localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity));
      // console.log(this.totalQuantity);

      // localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));
      // console.log(this.totalPrice);

      // localStorage.setItem("totalPriceNoSale", JSON.stringify(this.totalPriceNoSale));
      // console.log(this.totalPriceNoSale);
      // JSON.parse(localStorage.getItem('totalPrice'));
      // JSON.parse(localStorage.getItem('shoppingCart'));
      // JSON.parse(localStorage.getItem('totalQuantity'));
      // JSON.parse(localStorage.getItem('totalPriceNoSale'));

    }

constructor(private localStorageService: LocalService){}
}
