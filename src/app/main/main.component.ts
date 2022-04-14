import { Component } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent {
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

  i=0;
  addMachine(){

      this.i++;

  }


}
