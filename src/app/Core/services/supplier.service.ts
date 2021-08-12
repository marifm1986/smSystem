import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISupplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  readonly APIUrl = 'http://localhost:50572/api';
   

  constructor(private http: HttpClient) { }


 getSupplier(): Observable<ISupplier[]>
  {
      return this.http.get<ISupplier[]>(this.APIUrl + '/Supplier');
  }
 addSupplier(val:any)
  {
      return this.http.post(this.APIUrl + '/Supplier', val);
  }
 updateSupplier(val:any)
  {
      return this.http.put(this.APIUrl + '/Supplier', val);
  }
 deleteSupplier(val:any)
  {
      return this.http.delete(this.APIUrl + '/Supplier/' + val);
  }

  /* companies: any[] = [
    {
      id: 1,
      name: 'Golden Harvest',
      subTitle: 'Food and Beverage',
      salePending: true,
      purchasePending: true,
      prodQty: 1256,
      totalValue: 258245,
      status: 'Active',
      showMore: false
    },
    {
      id: 2,
      name: 'Decko Food',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 1001,
      totalValue: 124350,
      status: 'Active',
      showMore: false
    },
    {
      id: 3,
      name: 'Haque B2B',
      subTitle: 'Food Company Ltd.',
      salePending: false,
      purchasePending: true,
      prodQty: 1001,
      totalValue: 124350,
      status: 'Active',
      showMore: false
    },
    {
      id: 4,
      name: 'Haque C2C',
      subTitle: 'Food Company Ltd.',
      salePending: false,
      purchasePending: false,
      prodQty: 500,
      totalValue: 5732,
      status: 'Active',
      showMore: false
    },
    {
      id: 5,
      name: 'Start Line Food',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 500,
      totalValue: 5732,
      status: 'Active',
      showMore: false
    },
    {
      id: 6,
      name: 'Romania',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 7,
      name: 'Lalmai Food',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 8,
      name: 'Micro Trade',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 9,
      name: 'Protik Food',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 10,
      name: 'Prome',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 11,
      name: 'Healthy Choise',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 12,
      name: 'Kishwan',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 13,
      name: 'Orion Group Ltd.',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 14,
      name: 'Orion Group Ltd.',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 15,
      name: 'Asian Food',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 16,
      name: 'Ejab Group Kiddo',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 17,
      name: 'Nice Food Valley',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 17,
      name: 'Nice Food Valley',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 17,
      name: 'Nice Food Valley',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    {
      id: 17,
      name: 'Nice Food Valley',
      subTitle: 'Food and Beverage',
      salePending: false,
      purchasePending: false,
      prodQty: 712,
      totalValue: 25454,
      status: 'Active',
      showMore: false
    },
    
  ]; */
  



}
