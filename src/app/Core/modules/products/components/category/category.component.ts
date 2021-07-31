import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Core/services/product.service';
import { ICategory } from '../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  cateList: ICategory[] = []

  constructor(private cateSerivce: ProductService) { }

  ngOnInit(): void {
  }

  getCategoryList(){
    this.cateSerivce.geCategory().subscribe(res => {
      this.cateList = res
    })
  }


}
