import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() prod: any;
  ProductID:number = 0;
  ProductCode:string = '';
  ProductName:string = '';
  Description:string = '';
  ProductCost:number = 0;
  ProductMrp:number = 0;
  ReOrder:number = 0;
  Category:string = '';
  Status: boolean = true;
  Supplier: string = '';

  CategoryList: any = []

  successMess = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCategoryList();
  }

  loadCategoryList() {
    this.productService.geCategory().subscribe((data: any) => {
      this.CategoryList = data;

      this.ProductID = this.prod.ProductID;
      this.ProductCode = this.prod.ProductCode;
      this.ProductName = this.prod.ProductName;
      this.Description = this.prod.Description;
      this.ProductCost = this.prod.ProductCost;
      this.ProductMrp = this.prod.ProductMrp;
      this.ReOrder = this.prod.ReOrder;
      this.Category = this.prod.Category;
      this.Status = this.prod.Status;
      this.Supplier = this.prod.Supplier;
      


    })
  }


  addProd() {
    var val = {
      ProductID: this.ProductID,
      ProductCode: this.ProductCode,
      ProductName: this.ProductName,
      Description: this.Description,
      ProductCost: this.ProductCost,
      ProductMrp: this.ProductMrp,
      ReOrder: this.ReOrder,
      Category: this.Category,
      Status: this.Status,
      Supplier: this.Supplier,
    }
    this.productService.addProduct(val).subscribe(res => {
      this.successMess = res.toString();
    })
  }
  updateprod() {
    var val = {
      ProductID: this.ProductID,
      ProductCode: this.ProductCode,
      ProductName: this.ProductName,
      Description: this.Description,
      ProductCost: this.ProductCost,
      ProductMrp: this.ProductMrp,
      ReOrder: this.ReOrder,
      Category: this.Category,
      Status: this.Status,
      Supplier: this.Supplier,
    }
    
    this.productService.updateProduct(val).subscribe(res => {
      this.successMess = res.toString();
    })
  }

}
