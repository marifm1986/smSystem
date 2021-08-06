import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Core/models/product';
import { DataPassService } from 'src/app/Core/services/data-pass.service';
import { ProductService } from 'src/app/Core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  ActivateAddEditProdComp = false;
  modalTitle: string = '';
  prod: any;



  private _productFilter: string = '';

  get productFilter(): string {
    return this._productFilter;
  }
  set productFilter(value: string) {
    this._productFilter = value;
    console.log('In Setter:', value);
    this.FilteredProducts = this.performFilter(value);
  }

  FilteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private dataPassService: DataPassService, private ProductService: ProductService) { }

  ngOnInit() {
    this.getProdList();

  }

  getProdList() {
    this.ProductService.getAllProducts().subscribe(data => {
      this.products = data;
      this.FilteredProducts = data;
    })
  }



  onDelete(item: any) {
    if (confirm('Are you Sure?')) {
      this.ProductService.deleteProduct(item.ProductID).subscribe(data => {
        alert(data.toString());
        this.getProdList();
      })
    }
  }



  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.ProductName.toLocaleLowerCase().includes(filterBy))
  }

  addClick() {
    this.prod = {
      ProductID: 0,
      ProductCode: '',
      ProductName: '',
      Description: '',
      ProductCost: 0,
      ProductMrp: 0,
      ReOrder: 0,
      Category: '',
      Status: '',
      Supplier: '',
    }
    this.modalTitle = "Add Product"
    this.ActivateAddEditProdComp = true;
    this.getProdList();
  }

  closeClick() {
    this.ActivateAddEditProdComp = false;
    this.getProdList();
  }

  editClick(item: any) {
    this.prod = item;
    this.modalTitle = "Edit Product"
    this.ActivateAddEditProdComp = true;
  }



}
