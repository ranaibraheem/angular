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
  totalQuantity = 0;
  totalPrice = 0;
  shoppingCart = [];
  totalPriceNoSale = 0;


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

  addMachine(){
    this.totalQuantity++;
  }
  updateItem(product, index, updateType){
    this.shoppingCart.forEach(cart =>{
      if(cart.id === product.id){
        if(updateType === 'add'){

          cart.quantity++;
          cart.stock--;
          this.totalQuantity++;
          if(cart.onSale30){
            this.totalPrice += cart.price - cart.price*30/100;
            this.totalPriceNoSale += cart.price;
          }else if(cart.onSale50){
            this.totalPrice += cart.price - cart.price*50/100;
            this.totalPriceNoSale += cart.price;
          }else{
            this.totalPrice += cart.price;
            this.totalPriceNoSale += cart.price;
          }
          // localStorage.setItem('totalQuantity', this.totalQuantity)
          // localStorage.setItem('totalPrice', this.totalPrice)
          // localStorage.setItem('totalPriceNoSale', this.totalPriceNoSale);

        }else{
          if(cart.quantity>1){
            this.totalQuantity--;
            cart.quantity--;
            cart.stock++;
            if(cart.onSale30){
              this.totalPrice -= cart.price -cart.price*30/100;
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
              this.totalPrice -=cart.price - cart.price*30/100;
              this.totalPriceNoSale -= cart.price;

            }else if(cart.onSale50){
              this.totalPrice -= cart.price - cart.price*50/100;
              this.totalPriceNoSale -= cart.price;

            }else{
              this.totalPrice -= cart.price;
              this.totalPriceNoSale -= cart.price;
            }
          }
        //   localStorage.removeItem('shoppingCart');
        //   localStorage.totalQuantity = this.totalQuantity
        //   localStorage.totalPrice = this.totalPrice
        //   localStorage.totalPriceNoSale = this.totalPriceNoSale;
        }
      }
    })
  }
}

