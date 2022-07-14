import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  search = '';
  i=0;
  cartIcon = "&#x1F6D2;";
  totalPrice = this.localStorageService.get('totalPrice') || 0;
  shoppingCart = this.localStorageService.get('shoppingCart') || [];
  totalQuantity = this.localStorageService.get('totalQuantity') || 0;
  totalPriceNoSale = this.localStorageService.get('totalPriceNoSale') || 0;
  Products = this.localStorageService.get('Products') || [];

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

    if(this.localStorageService.shoppingCart=[]){
      this.localStorageService.set("shoppingCart", this.shoppingCart);
      this.localStorageService.set("totalQuantity", this.totalQuantity);
      this.localStorageService.set("totalPrice", this.totalPrice);
      this.localStorageService.set("totalPriceNoSale", this.totalPriceNoSale);
    } else{
      this.localStorageService.get('shoppingCart');
      this.localStorageService.get('totalQuantity');
      this.localStorageService.get('totalPrice');
      this.localStorageService.get('totalPriceNoSale');
    }
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
    this.localStorageService.clear();
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
          if(window.localStorage.shoppingCart=[]){
            this.localStorageService.set("shoppingCart", this.shoppingCart);
            this.localStorageService.set("totalQuantity", this.totalQuantity);
            this.localStorageService.set("totalPrice", this.totalPrice);
            this.localStorageService.set("totalPriceNoSale", this.totalPriceNoSale);

          } else{
            this.localStorageService.get('shoppingCart');
            this.localStorageService.get('totalQuantity');
            this.localStorageService.get('totalPrice');
            this.localStorageService.get('totalPriceNoSale');
          }

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
            localStorage.shoppingCart = JSON.stringify(this.shoppingCart);
            localStorage.totalPrice = this.totalPrice
            localStorage.totalQuantity = this.totalQuantity
            localStorage.totalPriceNoSale = this.totalPriceNoSale;
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
            localStorage.shoppingCart = JSON.stringify(this.shoppingCart);
            localStorage.totalQuantity = this.totalQuantity
            localStorage.totalPrice = this.totalPrice
            localStorage.totalPriceNoSale = this.totalPriceNoSale;
          }
        }

      }
    })
  }

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private localStorageService: LocalService,
    ) {}

  ngOnInit() {
    this.localStorageService.get('shoppingCart');
    this.localStorageService.get('totalQuantity');
    this.localStorageService.get('totalPrice');
    this.localStorageService.get('totalPriceNoSale');

    this.localStorageService.set("shoppingCart", this.shoppingCart);
    this.localStorageService.set("totalQuantity", this.totalQuantity);
    this.localStorageService.set("totalPrice", this.totalPrice);
    this.localStorageService.set("totalPriceNoSale", this.totalPriceNoSale);

  }

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

