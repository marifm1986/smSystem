import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Core/services/product.service';
import { ICategory } from '../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  successMess = ''
  cateList: ICategory[] = []
  isNew = false;
  CategoryID: number = 0;
  CategoryName: string = '';
  Cate: any;
  constructor(private cateSerivce: ProductService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.cateSerivce.geCategory().subscribe(res => {
      this.cateList = res
    })
  }

  addCategory() {
    var val = {
      CategoryID: this.CategoryID,
      CategoryName: this.CategoryName
    }
    this.cateSerivce.addCategory(val).subscribe(res => {
      this.successMess = res.toString();
      this.getCategoryList();
    })
   
    this.isNew = false;
  }

  onEdit(cate: any){
    this.CategoryName = cate.CategoryName;
    this.isNew = true;
  }

  updateCategory() {
     var val = {
      CategoryID: this.CategoryID,
      CategoryName: this.CategoryName
    }
    this.cateSerivce.updateCategory(val).subscribe(res => {
      this.successMess = res.toString();
      this.getCategoryList();
    })
    this.isNew = false;
    this.CategoryName = ''
  }

  deleteCate(item: any) {
    if (confirm('Are you Sure?')) {
      this.cateSerivce.deleteCategory(item.CategoryID).subscribe(data => {
        this.getCategoryList();
      })
    }
  }

  addNew(){
    this.isNew =! this.isNew;
    this.CategoryName = '' 
  }

}
