import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  imagePath = 'assets/images/';

  Products=JSON.parse(localStorage.getItem('Products')) || [];

  productindex=JSON.parse(localStorage.getItem('productindex')) || 0;

  cartIcon = "&#x1F6D2;";
  shoppingCart = [];
  totalPrice = 0;
  totalQuantity = 0;
  totalPriceNoSale = 0;
  detailProduct=this.Products[this.productindex];


  addToCart(detailProduct) {
    this.Products.forEach(item => {
      if(item.id === detailProduct.id && item.stock>0){
        if(!this.shoppingCart.some(elem => elem.id === item.id)){
          this.shoppingCart.push(item);
          this.totalQuantity++;

            item.quantity++;
            item.stock--;

          if (item.onSale30) {
            this.totalPrice += item.price -item.price*30/100
            this.totalPriceNoSale += item.price;
          } else if (item.onSale50) {
            this.totalPrice += item.price - item.price*50/100
            this.totalPriceNoSale += item.price;

          } else {
            this.totalPrice += item.price;
            this.totalPriceNoSale += item.price;
          }

          localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart) );
          localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity) );
          localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice) );
          localStorage.setItem("totalPriceNoSale", JSON.stringify(this.totalPriceNoSale) );


        }else{
          this.shoppingCart.forEach(ele => {
            if(ele.id === detailProduct.id && ele.stock>0){
              ele.quantity++;
              ele.stock--;

              this.totalQuantity++;
              if (ele.onSale30) {
                this.totalPrice += ele.price-(ele.price*30/100);
                this.totalPriceNoSale += ele.price;


              } else if (ele.onSale50) {
                this.totalPrice += ele.price- (ele.price*50/100);
                this.totalPriceNoSale += ele.price;

              } else {
                this.totalPrice += ele.price;
                this.totalPriceNoSale += ele.price;
              }

              localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart) );
              localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity) );
              localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice) );
              localStorage.setItem("totalPriceNoSale", JSON.stringify(this.totalPriceNoSale) );

          }
          })
        }
      }
    })
  }


  constructor() { }

  ngOnInit(): void {
  }

}
