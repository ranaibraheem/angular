import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent implements OnInit {

  imagePath = 'assets/images/';
  cartIcon = "&#x1F6D2;";
  productindex=0;
  totalPrice =JSON.parse(localStorage.getItem('totalPrice')) || 0;
  shoppingCart=JSON.parse(localStorage.getItem('shoppingCart')) || [];
  totalQuantity=JSON.parse(localStorage.getItem('totalQuantity')) || 0;
  totalPriceNoSale=JSON.parse(localStorage.getItem('totalPriceNoSale')) || 0;



  products = [{
    name: "Simple and tasty",
    image: "simplecoffem.jpg",
    alt: "Photo by mentatdgt from Pexels",
    machineNum: "CM357e",
    text: "A simple coffee machine that makes a tasty coffee, takes no space in the kitchen.",
    price: 45,
    onSale30: true,
    onSale50: false,
    stock: 10,
    id: 1,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Profitional",
    image: "profitionalcoffem.jpg",
    alt: "Photo by Eka Sutrisno from Pexels",
    machineNum: "CM359e",
    text: "For coffee lovers, this is the one you need.",
    price: 899,
    onSale30: false,
    onSale50: true,
    stock: 4,
    id: 2,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Fresh",
    image: "freshcoffeem.jpg",
    alt: "Photo by Matt Jerome Connor from Pexels",
    machineNum: "CM356f",
    text: "Always fresh coffee. With or without milk, so tasty.",
    price: 150,
    onSale30: false,
    onSale50: false,
    stock: 8,
    id: 3,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Filter",
    image: "filtercoffeem.jpg",
    alt: "Photo by Thirdman from Pexels",
    machineNum: "CM352f",
    text: "A wonderfull coffee machine. For people who love filtered coffee, this is the best.",
    price: 200,
    onSale30: true,
    onSale50: false,
    stock: 12,
    id: 4,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Easy",
    image: "easycoffeem.jpg",
    alt: "Photo by Ketut Subiyanto from Pexels",
    machineNum: "CM363f",
    text: "Nice set. Making coffee with this set is an easy and wonderfull experience.",
    price: 450,
    onSale30: false,
    onSale50: true,
    stock: 25,
    id: 5,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Silver",
    image: "silvercoffeem.jpg",
    alt: "Photo by Karolina Grabowska from Pexels",
    text: "A beautifull silver coffee machine, tasty espresso and cappuccino.",
    machineNum: "CM365f",
    price: 130,
    onSale30: false,
    onSale50: false,
    stock: 30,
    id: 6,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Small & Red",
    image: "smallcoffeem.jpg",
    alt: "Photo by Hiago Italo from Pexels",
    machineNum: "CM368e",
    text: "Small but tasty. A beautifull red coffee machine that makes a tasty coffee.",
    price: 99,
    onSale30: false,
    onSale50: false,
    stock: 0,
    id: 7,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Take away and enjoy",
    image: "takeawaycoffeem.jpg",
    alt: "Photo by Taryn Elliott from Pexels",
    machineNum: "CM369e",
    text: "So tasty, so easy to use. Take it with you wherever you go.",
    price: 55,
    onSale30: false,
    onSale50: false,
    stock: 60,
    id: 8,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Handy and tasty",
    image: "handycoffeem.jpg",
    alt: "Photo by Maria Orlova from Pexels",
    machineNum: "CM363e",
    text: "Handy and easy to use coffee machine. Makes very tasty coffee.",
    price: 80,
    onSale30: true,
    onSale50: false,
    stock: 20,
    id: 9,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Super Machine",
    image: "soprofitionalcoffeem.jpg",
    alt: "Photo by Ivan Samkov from Pexels",
    machineNum: "CM370f",
    text: "A profitional coffee machine, for coffee lovers.",
    price: 999,
    onSale30: true,
    onSale50: false,
    stock: 8,
    id: 10,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Everyday Coffee",
    image: "everydaycoffeem.jpg",
    alt: "Photo by Cleyder Duque from Pexels",
    machineNum: "CM373e",
    text: "Tasty coffee for your everyday life, for you, for your guests, for everybody.",
    price: 80,
    onSale30: false,
    onSale50: true,
    stock: 15,
    id: 11,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Modern",
    image: "moderncoffeem.jpg",
    alt: "Photo by Jonathan Borba from Pexels",
    machineNum: "CM377f",
    text: "Modern coffee machine, so beautifull and tasty.",
    price: 199,
    onSale30: true,
    onSale50: false,
    stock: 12,
    id: 12,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Super easy",
    image: "supereasycoffeem.jpg",
    alt: "Photo by Svetlana Ponomareva from Pexels",
    machineNum: "CM371e",
    text: "Super easy coffee machine, for who wants tasty coffee fast.",
    price: 50,
    onSale30: false,
    onSale50: false,
    stock: 22,
    id: 13,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Arabic",
    image: "arabiccoffeem.jpg",
    alt: "Photo by Michaela S. from Pexels",
    machineNum: "CM378e",
    text: "Set for fresh bewed arabic coffee, so tasty, you'll never regret it.",
    price: 80,
    onSale30: false,
    onSale50: false,
    stock: 10,
    id: 14,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Super profitional",
    image: "superprofitionalcoffeem.jpg",
    alt: "Photo by Pavel Danilyuk from Pexels",
    machineNum: "CM380f",
    text: "Super profitional coffee machine. Tasty coffee, it's worth it.",
    price: 1982,
    onSale30: false,
    onSale50: false,
    stock: 2,
    id: 15,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Work time coffee",
    image: "worktimecoffeem.jpg",
    alt: "Photo by Ekrulila from Pexels",
    machineNum: "CM490e",
    text: "Tasty coffee. You can make it fast and start your work actively",
    price: 75,
    onSale30: false,
    onSale50: false,
    stock: 43,
    id: 16,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Time out",
    image: "timeoutcoffeem.jpg",
    alt: "Photo by Rachel Claire from Pexels",
    machineNum: "CM495e",
    text: "Drink this tasty coffee from this machine to relax and take a time out.",
    price: 160,
    onSale30: true,
    onSale50: false,
    stock: 16,
    id: 17,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Nice coffee",
    image: "nicecoffeem.jpg",
    alt: "Photo by Lynnelle Richardson from Pexels",
    machineNum: "CM494e",
    text: "Nice coffee machine that makes a tasty coffee for you.",
    price: 399,
    onSale30: true,
    onSale50: false,
    stock: 20,
    id: 18,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Coffee lovers",
    image: "coffeeloverscoffeem.jpg",
    alt: "Photo by Clam Lo from Pexels",
    machineNum: "CM483e",
    text: "If you love coffe, you will love this coffee machine.",
    price: 275,
    onSale30: false,
    onSale50: true,
    stock: 18,
    id: 19,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Cappuccino lovers",
    image: "cappuccinoloverscoffeem.jpg",
    alt: "Photo by Pavel Danilyuk from Pexels",
    machineNum: "CM400f",
    text: "This coffee machine is espically for you cappuccino lovers.",
    price: 2560,
    onSale30: false,
    onSale50: true,
    stock: 9,
    id: 20,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Cappuccino professional",
    image: "cappuccinoprofitionalcoffeem.jpg",
    alt: "Photo by Lisa from Pexels",
    machineNum: "CM402f",
    text: "This professional coffee machine makes a tasty cappuccino.",
    price: 2470,
    onSale30: true,
    onSale50: false,
    stock: 11,
    id: 21,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Espresso",
    image: "espressocoffeem.jpg",
    alt: "Photo by Sander Dalhuisen from Pexels",
    machineNum: "CM410f",
    text: "Tasty espresso. You'll always like it",
    price: 1999,
    onSale30: false,
    onSale50: true,
    stock: 18,
    id: 22,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Tasty",
    image: "tastycoffeem.jpg",
    alt: "Photo by Ida Bagus Anggarama from Pexels",
    machineNum: "CM501m",
    text: "Tasty coffee. Small coffee machine that fits in small kitchens",
    price: 400,
    onSale30: true,
    onSale50: false,
    stock: 4,
    id: 23,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Small cappuccino machine",
    image: "smallcappuccinocoffeem.jpg",
    alt: "Photo by Noah Frohn from Pexels",
    machineNum: "CM512m",
    text: "This small coffee machine is perfect for a cup of cappuccino.",
    price: 680,
    onSale30: false,
    onSale50: false,
    stock: 22,
    id: 24,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Tiny",
    image: "tinycoffeem.jpg",
    alt: "Photo by Tim Douglas from Pexels",
    machineNum: "CM514m",
    text: "Tiny coffee machine. filtered coffee is the best.",
    price: 89,
    onSale30: true,
    onSale50: false,
    stock: 8,
    id: 25,
    quantity: 0,
    category: 'machines',
    show: true,
},
{
    name: "Unic",
    image: "uniccoffeem.jpg",
    alt: "Photo by Georgi Petrov from Pexels",
    machineNum: "CM911m",
    text: "Unic coffee machine. You will always love it.",
    price: 90,
    onSale30: false,
    onSale50: false,
    stock: 3,
    id: 26,
    quantity: 0,
    category: 'machines',
    show: true,
},{
  name: "INDONESIA Medium",
  image: "beans1.jpg",
  alt: "Photo by Cup of Couple from Pexels",
  text: "Indonesian coffee beans. Tasty coffee espically for cappuccino.",
  weight: 1,
  price: 25,
  onSale30: false,
  onSale50: false,
  stock: 30,
  id: 27,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "COLOMBIA Medium",
  image: "beans2.jpg",
  alt: "Photo by Cup of Couple from Pexels",
  text: "colombian coffee beans.",
  weight: 1,
  price: 28,
  onSale30: true,
  onSale50: false,
  stock: 50,
  id: 28,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "COLOMBIA Blond",
  image: "beans3.jpg",
  alt: "Photo by Denys Gromov from Pexels",
  text: "Colombian coffee beans.",
  weight: 0.5,
  price: 13,
  onSale30: false,
  onSale50: false,
  stock: 2,
  id: 29,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "BRAZIL Dark",
  image: "beans4.jpg",
  alt: "Photo by Thirdman from Pexels",
  text: "Brazilian coffee beans.",
  weight: 1,
  price: 30,
  onSale30: false,
  onSale50: true,
  stock: 34,
  id: 30,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "BRAZIL Blond",
  image: "beans5.jpg",
  alt: "Photo by Los Muertos Crew from Pexels",
  text: "Brazilian coffee beans.",
  weight: 1,
  price: 28,
  onSale30: false,
  onSale50: false,
  stock: 9,
  id: 31,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "INDIA Dark",
  image: "beans6.jpg",
  alt: "istock",
  text: "Indian coffee beans.",
  weight: 1,
  price: 30,
  onSale30: true,
  onSale50: false,
  stock: 3,
  id: 32,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "ETHIOPIA Medium",
  image: "beans7.jpg",
  alt: "Photo by Ave Calvar Martinez from Pexels",
  text: "Ethiopian coffee beans.",
  weight: 1,
  price: 27,
  onSale30: false,
  onSale50: false,
  stock: 9,
  id: 33,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "INDIA Medium",
  image: "beans8.jpg",
  alt: "Photo by bacho nadiradze from Pexels",
  text: "Indian coffee beans.",
  weight: 0.5,
  price: 12,
  onSale30: false,
  onSale50: true,
  stock: 2,
  id: 34,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "ETHIOPIA Blond",
  image: "beans9.jpg",
  alt: "Photo by Cup of Couple from Pexels ",
  text: "Ethiopian coffee beans.",
  weight: 1,
  price: 29,
  onSale30: false,
  onSale50: false,
  stock: 17,
  id: 35,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "INDIA Blond",
  image: "beans10.jpg",
  alt: "Photo by Alexas Fotos from Pexels ",
  text: "Inidan coffee beans.",
  weight: 1,
  price: 30,
  onSale30: true,
  onSale50: false,
  stock: 22,
  id: 36,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "INDONESIA Blond",
  image: "beans11.jpg",
  alt: "Photo by Engin Akyurt from Pexels",
  text: "Indonesian coffee beans.",
  weight: 1,
  price: 27,
  onSale30: false,
  onSale50: false,
  stock: 4,
  id: 37,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "INDONESIA Dark",
  image: "beans12.jpg",
  alt: "Photo by Ryutaro Tsukata from Pexels",
  text: "Indonesian coffee beans.",
  weight: 1,
  price: 30,
  onSale30: true,
  onSale50: false,
  stock: 44,
  id: 38,
  quantity: 0,
  category: 'beans',
  show: true,
},

{
  name: "BRAZIL Medium",
  image: "beans13.jpg",
  alt: "Photo by Cup of Couple from Pexels",
  text: "Barazilian coffee beans.",
  weight: 0.5,
  price: 14,
  onSale30: false,
  onSale50: false,
  stock: 83,
  id: 39,
  quantity: 0,
  category: 'beans',
  show: true,
},

{
  name: "VIETNAM Blond",
  image: "beans14.jpg",
  alt: "Photo by cottonbro from Pexels",
  text: "Veitnamian coffee beans.",
  weight: 1,
  price: 25,
  onSale30: true,
  onSale50: false,
  stock: 60,
  id: 40,
  quantity: 0,
  category: 'beans',
  show: true,
},

{
  name: "VIETNAM Dark",
  image: "beans15.jpg",
  alt: "Photo by Nicola Barts from Pexels",
  text: "Veitnamian coffee beans.",
  weight: 1,
  price: 28,
  onSale30: false,
  onSale50: false,
  stock: 4,
  id: 41,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "VIETNAM Medium",
  image: "beans16.jpg",
  alt: "Photo by lyncoln Miller from Pexels",
  text: "Veitnamian coffee beans.",
  weight: 1,
  price: 27,
  onSale30: false,
  onSale50: true,
  stock: 58,
  id: 42,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "PERU Blond",
  image: "beans17.jpg",
  alt: "Photo by Mariakray from Pexels",
  text: "Peruvian coffee beans.",
  weight: 1,
  price: 28,
  onSale30: false,
  onSale50: false,
  stock: 45,
  id: 43,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "PERU Dark",
  image: "beans18.jpg",
  alt: "Photo by Pavel Danilyuk from Pexels",
  text: "Peruvian coffee beans.",
  weight: 0.5,
  price: 16,
  onSale30: false,
  onSale50: true,
  stock: 56,
  id: 44,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "UGANDA Medium",
  image: "beans19.jpg",
  alt: "Photo by Cup of Couple from Pexels",
  text: "Ugandan coffee beans.",
  weight: 1,
  price: 26,
  onSale30: false,
  onSale50: true,
  stock: 54,
  id: 45,
  quantity: 0,
  category: 'beans',
  show: true,
},
{
  name: "UGANDA Dark",
  image: "beans20.jpg",
  alt: "Photo by Lisa from Pexels",
  text: "Ugandan coffee beans.",
  weight: 1,
  price: 28,
  onSale30: false,
  onSale50: false,
  stock: 30,
  id: 46,
  quantity: 0,
  category: 'beans',
  show: true,
},{
  name: "Black coffee cup set",
  image: "blackcoffeec.jpg",
  alt: "Photo by Chevanon Photography from Pexels",
  text: "A beautifull set of coffee cups. 6 stuks",
  stucks: 6,
  price: 35,
  onSale30: true,
  onSale50: false,
  stock: 120,
  id: 47,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Beautifull brown coffee cup",
  image: "nicebrowncoffeec.jpg",
  alt: "Photo by Pelageia Zelenina from Pexels",
  text: "A beautifull coffee cup.",
  stucks: 1,
  price: 15,
  onSale30: false,
  onSale50: true,
  stock: 2,
  id: 48,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Brown coffee cup set",
  image: "browncoffeec.jpg",
  alt: "Photo by Valeriia Miller from Pexels",
  text: "A beautifull set of coffee cups. 2 stuks",
  stucks: 6,
  price: 15,
  onSale30: false,
  onSale50: false,
  stock: 80,
  id: 49,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "White coffee cup Set",
  image: "whitecoffeec.jpg",
  alt: "Photo by Alin Luna from Pexels",
  text: "A nice white set of coffee cups. 6 stuks",
  stucks: 6,
  price: 40,
  onSale30: true,
  onSale50: false,
  stock: 10,
  id: 50,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Grey coffee cup Set",
  image: "greycoffeec.jpg",
  alt: "Photo by Vitaly Vlasov from Pexels",
  text: "A large grey set of coffee cups. 6 stuks",
  stucks: 6,
  price: 58,
  onSale30: false,
  onSale50: true,
  stock: 5,
  id: 51,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Nice coffee cup Set",
  image: "nicecoffeec.jpg",
  alt: "Photo by Marta Dzedyshko from Pexels",
  text: "A nice beautifull set of coffee cups. 12 stuks",
  stucks: 12,
  price: 120,
  onSale30: false,
  onSale50: false,
  stock: 15,
  id: 52,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Pottery coffee cup",
  image: "potterycoffeec.jpg",
  alt: "Photo by Cup of Couple from Pexels",
  text: "A pottery beautifull coffee cup.",
  stucks: 1,
  price: 12,
  onSale30: true,
  onSale50: false,
  stock: 20,
  id: 53,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Beautifull coffee cup",
  image: "beautifullcoffeec.jpg",
  alt: "Photo by SpotwizardLee from Pexels",
  text: "A beautifull and cozy coffee cup.",
  stucks: 1,
  price: 20,
  onSale30: true,
  onSale50: false,
  stock: 11,
  id: 54,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Big coffee cup",
  image: "bigcoffeec.jpg",
  alt: "Photo by Ioana Motoc from Pexels",
  text: "A big and nice coffee cup.",
  stucks: 1,
  price: 13,
  onSale30: true,
  onSale50: false,
  stock: 16,
  id: 55,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Big white coffee cup",
  image: "whitebigcoffeec.jpg",
  alt: "Photo by cottonbro from Pexels",
  text: "A big white coffee cup.",
  stucks: 1,
  price: 7,
  onSale30: false,
  onSale50: false,
  stock: 22,
  id: 56,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "White small coffee cup",
  image: "smallwhitecoffeec.jpg",
  alt: "Photo by Rachel Claire from Pexels",
  text: "A small white coffee cup.",
  stucks: 1,
  price: 11,
  onSale30: false,
  onSale50: true,
  stock: 30,
  id: 57,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Big pink coffee cup",
  image: "bigpinkcoffeec.jpg",
  alt: "Photo by Harper Sunday from Pexels",
  text: "A big pink coffee cup.",
  stucks: 1,
  price: 18,
  onSale30: false,
  onSale50: false,
  stock: 3,
  id: 58,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Green coffee cup set",
  image: "greencoffeec.jpg",
  alt: "Photo by Olga Mironova from Pexels",
  text: "A green coffee cup. 6 stucks.",
  stucks: 6,
  price: 64,
  onSale30: true,
  onSale50: false,
  stock: 38,
  id: 59,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Green brown coffee cup set",
  image: "greenbrowncoffeec.jpg",
  alt: "Photo by Nida from Pexels",
  text: "A green brown coffee cup set. 12 stucks",
  stucks: 12,
  price: 112,
  onSale30: false,
  onSale50: false,
  stock: 3,
  id: 60,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "portable coffee cup.",
  image: "portablecoffeec.jpg",
  alt: "Photo by Quang Anh Ha Nguyen from Pexels",
  text: "A portable coffee cup.",
  stucks: 1,
  price: 16,
  onSale30: false,
  onSale50: false,
  stock: 60,
  id: 61,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Nice grey coffee cup.",
  image: "nicegreycoffeec.jpg",
  alt: "Photo by Anna Rye from Pexels",
  text: "A grey coffee cup.",
  stucks: 1,
  price: 6,
  onSale30: false,
  onSale50: true,
  stock: 2,
  id: 62,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Big beautifull coffee cup.",
  image: "bigbeautifullcoffeec.jpg",
  alt: "Photo by Karolina Grabowska from Pexels",
  text: "A big and beautifull coffee cup.",
  stucks: 1,
  price: 15,
  onSale30: false,
  onSale50: false,
  stock: 27,
  id: 63,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Nice orange coffee cup set.",
  image: "orangecoffeec.jpg",
  alt: "Photo by Tim Douglas from Pexels",
  text: "Orange and nice coffee cup set. 6 stucks",
  stucks: 6,
  price: 92,
  onSale30: true,
  onSale50: false,
  stock: 33,
  id: 64,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "White and gold coffee cup.",
  image: "whitegoldcoffeec.jpg",
  alt: "Photo by Ioana Motoc from Pexels",
  text: "White and gold beautifull coffee cup.",
  stucks: 1,
  price: 18,
  onSale30: false,
  onSale50: true,
  stock: 3,
  id: 65,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Beautifull coffee cup.",
  image: "verynicecoffeec.jpg",
  alt: "Photo by Eneida Nieves from Pexels",
  text: "White and gold very nice coffee cup.",
  stucks: 1,
  price: 20,
  onSale30: false,
  onSale50: false,
  stock: 22,
  id: 66,
  quantity: 0,
  category: 'cups',
  show: true,
},
{
  name: "Unic coffee cup.",
  image: "uniccoffeec.jpg",
  alt: "Photo by Skyler Ewing from Pexels",
  text: "black and gold unic coffee cup.",
  stucks: 1,
  price: 28,
  onSale30: false,
  onSale50: false,
  stock: 2,
  id: 67,
  quantity: 0,
  category: 'cups',
  show: true,
},
];

Products=localStorage.setItem("Products", JSON.stringify(this.products) );

addToCart(product) {
  this.products.forEach(item => {
    if(item.id === product.id && item.stock>0){
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
        const addToCartCookie = (cartItem) => {
          const cart = window.localStorage.getItem('cart');

          if(cart === null) {
              window.localStorage.setItem('cart', JSON.stringify([cartItem]));
          } else {
              const getCurrentCart = window.localStorage.getItem('cart');
              const currentCart = JSON.parse(getCurrentCart);

              currentCart.push(cartItem);

              window.localStorage.setItem('cart', JSON.stringify(currentCart));
          }
      };
      if(window.localStorage.shoppingCart=[]){
        localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart) );
        localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity) );
        localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice) );
        localStorage.setItem("totalPriceNoSale", JSON.stringify(this.totalPriceNoSale) );

      } else{
        JSON.parse(window.localStorage.getItem('shoppingCart'));
        JSON.parse(window.localStorage.getItem('totalQuantity'));
        JSON.parse(window.localStorage.getItem('totalPrice'));
        JSON.parse(window.localStorage.getItem('totalPriceNoSale'));
      }



      }else{
        this.shoppingCart.forEach(ele => {
          if(ele.id === product.id && ele.stock>0){
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

            if(window.localStorage.shoppingCart=[]){
              localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart) );
              localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity) );
              localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice) );
              localStorage.setItem("totalPriceNoSale", JSON.stringify(this.totalPriceNoSale) );

            } else{
              JSON.parse(window.localStorage.getItem('shoppingCart'));
              JSON.parse(window.localStorage.getItem('totalQuantity'));
              JSON.parse(window.localStorage.getItem('totalPrice'));
              JSON.parse(window.localStorage.getItem('totalPriceNoSale'));
            }

        }
        })
      }
    }
  })
}

detail(index){
  this.productindex === index;
  localStorage.setItem('productindex', JSON.stringify(index));
  console.log(index);
}


  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart) );
    localStorage.setItem("totalQuantity", JSON.stringify(this.totalQuantity) );
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice) );
    localStorage.setItem("totalPriceNoSale", JSON.stringify(this.totalPriceNoSale) );

  }

}
