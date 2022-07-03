import { Component } from "@angular/core";

interface Category {
  value: string;
  viewValue: string;
}

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  title = '&#x1D554;&#x1D559;&#x1D556;&#x1D563;&#x1D55C;&#x1D55C;&#x1D560;&#x1D557;&#x1D557;&#x1D55A;&#x1D556;';
  info = 'Coffee Products';
  selected:string='';
  link:string='';

  categories: Category[] = [
    {value: '', viewValue: 'All'},
    {value: 'machines', viewValue: 'Machines'},
    {value: 'beans', viewValue: 'Beans'},
    {value: 'cups', viewValue: 'Cups'},
  ];
}
