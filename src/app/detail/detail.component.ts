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

  constructor() { }

  ngOnInit(): void {
  }

}
