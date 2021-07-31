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

    getProdList(){
        this.ProductService.getAllProducts().subscribe(data  => {
            this.products = data;
            this.FilteredProducts = data;
        })
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
            product.ProductName.toLocaleLowerCase().includes(filterBy))
    }


    // TotalProductsValue() {
    //     return this.products.map(p => p.ProductCost).reduce((sum: any, b) => sum + b);
    // }
    
    // TotalFilterdProductValue() {
    //     return this.FilteredProducts.map(p => p.ProductCost).reduce((sum: any, b) => sum + b);
    // }



   

}
