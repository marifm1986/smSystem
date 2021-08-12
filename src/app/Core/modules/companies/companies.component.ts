import { Component, OnInit } from '@angular/core';
import { ISupplier } from '../../models/supplier';
import { DataPassService } from '../../services/data-pass.service';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  componentTitle = "Companies";
  showMore: any;

  selectedSupplierName = ''

  constructor( private dataService: DataPassService, private supplier:SupplierService) { }

  companies: ISupplier[] = []
  ngOnInit(): void {
   
    // this.dataService.componentTtle(this.componentTitle);
    this.getSupplier();
  }

  onSeeMore(company: any) {
    this.showMore =  this.showMore;
    console.log(console)
  }

  getSupplier(){
   this.supplier.getSupplier().subscribe(data =>{
     this.companies = data
   })
  }

  onSelect(supName:any){
this.selectedSupplierName = supName.SupplierName;
this.dataService.transferData(this.selectedSupplierName);
  }


}
