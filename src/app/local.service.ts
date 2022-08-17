import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

public shoppingCart: Object;
public totalQuantity: any;
public totalPrice: any;
public totalPriceNoSale: any;
public productindex: any;
public products: Object;

  public clearS(){
    localStorage.clear();
  }

  public remove(key: string){
    localStorage.removeItem(key);
  }

  public set(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Error while setting local storage', err);
    }
  }

  public get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error('Error while getting local storage key ', key, err);
      return '';
    }
  }

  ngOnInit(){

  }
}
