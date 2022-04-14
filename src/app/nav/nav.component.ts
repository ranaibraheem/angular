import { Component } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})

export class NavComponent {
    title = '&#x1D554;&#x1D559;&#x1D556;&#x1D563;&#x1D55C;&#x1D55C;&#x1D560;&#x1D557;&#x1D557;&#x1D55A;&#x1D556;';

search = '';
machines = [{
  name: "Simple and tasty",
  image: "simplecoffem.jpg",
  machineNum: "CM357e",
  price: 45,
  stock: 10,
  id: 1
},

{
  name: "Profitional",
  image: "profitionalcoffem.jpg",
  machineNum: "CM359e",
  price: 899,
  stock: 4,
  id: 2

},

{
  name: "Fresh",
  image: "freshcoffeem.jpg",
  machineNum: "CM356f",
  price: 150,
  stock: 8,
  id: 3

},

{
  name: "Filter",
  image: "filtercoffeem.jpg",
  machineNum: "CM352f",
  price: 200,
  stock: 12,
  id: 4

},

{
  name: "Easy",
  image: "easycoffeem.jpg",
  machineNum: "CM363f",
  price: 450,
  stock: 25,
  id: 5

},

{
  name: "Silver",
  image: "silvercoffeem.jpg",
  machineNum: "CM365f",
  price: 130,
  stock: 30,
  id: 6

},

{
  name: "Small & Red",
  image: "smallcoffeem.jpg",
  machineNum: "CM368e",
  price: 99,
  stock: 5,
  id: 7

},

{
  name: "Take away and enjoy",
  image: "takeawaycoffeem.jpg",
  machineNum: "CM369e",
  price: 55,
  stock: 60,
  id: 8

},

{
  name: "Handy and tasty",
  image: "handycoffeem.jpg",
  machineNum: "CM363e",
  price: 80,
  stock: 20,
  id: 9

},

{
  name: "Super Machine",
  image: "soprofitionalcoffeem.jpg",
  machineNum: "CM370f",
  price: 999,
  stock: 8,
  id: 10

},

{
  name: "Everyday Coffee",
  image: "everydaycoffeem.jpg",
  machineNum: "CM373e",
  price: 80,
  stock: 15,
  id: 11

},

{
  name: "Modern",
  image: "moderncoffeem.jpg",
  machineNum: "CM377f",
  price: 199,
  stock: 12,
  id: 12

},

{
  name: "Super easy",
  image: "supereasycoffeem.jpg",
  machineNum: "CM371e",
  price: 50,
  stock: 22,
  id: 13

},

{
  name: "Arabic",
  image: "arabiccoffeem.jpg",
  machineNum: "CM378e",
  price: 80,
  stock: 10,
  id: 14

},

{
  name: "Super profitional",
  image: "superprofitionalcoffeem.jpg",
  machineNum: "CM380f",
  price: 1982,
  stock: 2,
  id: 15

},
];

basket = document.querySelector('#cart');
addButton = document.querySelectorAll('.addToCart');
price = document.querySelector('#price');
remove = document.querySelector("#remove");
add_to_cart = document.querySelectorAll('.addToCart');
total = 0;
current2 = this.price;
addToCart(){

this.addButton.forEach(function (element, index) {

  element.addEventListener('click', function (event) {

      let product_id = this.getAttribute("product_id");
      let current = this.basket.innerText;
      let cart_button = document.querySelector('#cartButton');

      this.total = this.total + this.machines[product_id].price;
      this.price.innerText = this.current2 + this.total + "$";

      this.add_to_cart.forEach(function (ele, ind) {
          this.cart_button.innerHTML= 1;

          ele.addEventListener('click', function (e) {
              this.cart_button.innerText++;
          })


          this.remove.addEventListener('click', function (e2) {
              this.price.innerText = this.current2;
              this.cart_button.innerText = 0;
              this.basket.innerText = "Shopping Cart: ";

          })
      })
      this.basket.innerText = current + "  ____" + this.machines[product_id].name + ":" + " " + this.machines[product_id].price + "$";

  })


})
}
}
