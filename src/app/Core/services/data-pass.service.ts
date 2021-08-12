import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {
  // private _getProductList = new BehaviorSubject<string>('');
  // currentMessage = this._getProductList.asObservable();
  
  showSupplierName = new Subject();
  showComponentitle = new Subject();
  getProductList = new Subject();;
  
  constructor() { }
  
  transferData(msg: any) {
    this.showSupplierName.next(msg);
  }


  
  componentTtle(title: any) {
    this.showComponentitle.next(title);
  }
  sendProduct(arra: any){
    this.getProductList.next(arra);
  }
    
}
