import { Component, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { LocalService } from "../local.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})

export class NavComponent {
    title = '&#x1D554;&#x1D559;&#x1D556;&#x1D563;&#x1D55C;&#x1D55C;&#x1D560;&#x1D557;&#x1D557;&#x1D55A;&#x1D556;';
    @Input()totalPrice = this.localStorageService.get('totalPrice') || 0;
    @Input()shoppingCart = this.localStorageService.get('shoppingCart') || [];
    @Input()totalQuantity = this.localStorageService.get('totalQuantity') || 0;
    @Input()totalPriceNoSale = this.localStorageService.get('totalPriceNoSale') || 0;
    @Input()Products = this.localStorageService.get('Products') || [];

    totalQuantityReceived:any;
    ngOnInit(): void {
    }
    receiver(event: any){
      console.log(event);
      this.totalQuantityReceived = event;
    }
    // ngOnChanges(changes: SimpleChanges) {
    //   console.log(changes);
    //   console.log(changes.totalQuantity.currentValue)
    // }

constructor(
  private localStorageService: LocalService
  ){}
}
