import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  search = '';
  i=0;
  cartIcon = "&#x1F6D2;";
  totalPrice =JSON.parse(localStorage.getItem('totalPrice')) || 0;
  shoppingCart=JSON.parse(localStorage.getItem('shoppingCart')) || [];
  totalQuantity=JSON.parse(localStorage.getItem('totalQuantity')) || 0;
  totalPriceNoSale=JSON.parse(localStorage.getItem('totalPriceNoSale')) || 0;
  Products=JSON.parse(localStorage.getItem('Products')) || [];


  typeof(Products){
    return console.log(typeof Products);
  }

  removeItem(index) {
    this.totalQuantity -= this.shoppingCart[index].quantity

    if (this.shoppingCart[index].onSale30) {
      this.totalPrice -= (this.shoppingCart[index].price-((this.shoppingCart[index].price)*30/100))*this.shoppingCart[index].quantity
      this.totalPriceNoSale -= this.shoppingCart[index].price*this.shoppingCart[index].quantity

    } else if (this.shoppingCart[index].onSale50) {
      this.totalPrice -= (this.shoppingCart[index].price-((this.shoppingCart[index].price)*50/100))*this.shoppingCart[index].quantity
      this.totalPriceNoSale -= this.shoppingCart[index].price*this.shoppingCart[index].quantity

    } else {
      this.totalPrice -= this.shoppingCart[index].price*this.shoppingCart[index].quantity
      this.totalPriceNoSale -= this.shoppingCart[index].price*this.shoppingCart[index].quantity
    }

    this.shoppingCart[index].stock += this.shoppingCart[index].quantity
    this.shoppingCart[index].quantity = 0
    this.shoppingCart.splice(index, 1)

    localStorage.totalQuantity = this.totalQuantity
    localStorage.totalPrice = this.totalPrice
    localStorage.totalPriceNoSale = this.totalPriceNoSale
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart) );
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice) );
    localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity) );

  }

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

  updateItem(product, index, updateType){
    this.shoppingCart.forEach(cart =>{
      if(cart.id === product.id){
        if(updateType === 'add'){

          cart.quantity++;
          cart.stock--;
          this.totalQuantity++;
          if(cart.onSale30){
            this.totalPrice +=cart.price - cart.price*30/100;
            this.totalPriceNoSale += cart.price;
          }else if(cart.onSale50){
            this.totalPrice += cart.price - cart.price*50/100;
            this.totalPriceNoSale += cart.price;
          }else{
            this.totalPrice += cart.price;
            this.totalPriceNoSale += cart.price;
          }
          localStorage.setItem('totalQuantity', this.totalQuantity)
          localStorage.setItem('totalPrice', this.totalPrice)
          localStorage.setItem('totalPriceNoSale', this.totalPriceNoSale);

        }else{
          if(cart.quantity>1){
            this.totalQuantity--;
            cart.quantity--;
            cart.stock++;
            if(cart.onSale30){
              this.totalPrice -= cart.price - cart.price*30/100;
              this.totalPriceNoSale -= cart.price;
            }else if(cart.onSale50){
              this.totalPrice -= cart.price - cart.price*50/100;
              this.totalPriceNoSale -= cart.price;

            }else{
              this.totalPrice -= cart.price;
              this.totalPriceNoSale -= cart.price;
            }
          }else{
            this.shoppingCart.splice(index, 1);
            this.totalQuantity--;
            cart.quantity--;
            cart.stock++;
            if(cart.onSale30){
              this.totalPrice -= cart.price - cart.price*30/100;
              this.totalPriceNoSale -= cart.price;

            }else if(cart.onSale50){
              this.totalPrice -= cart.price - cart.price*50/100;
              this.totalPriceNoSale -= cart.price;

            }else{
              this.totalPrice -= cart.price;
              this.totalPriceNoSale -= cart.price;
            }
          }
          localStorage.removeItem('shoppingCart');
          localStorage.totalQuantity = this.totalQuantity
          localStorage.totalPrice = this.totalPrice
          localStorage.totalPriceNoSale = this.totalPriceNoSale;
        }
      }
    })
  }



  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

