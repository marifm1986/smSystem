import { Component, OnInit } from '@angular/core';
import { DataPassService } from 'src/app/Core/services/data-pass.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  component_title = "Dashboard"
  component_sub_title: any;
  totalCompanies: any;
  constructor(private dataService: DataPassService) { }

  ngOnInit() {
    this.dataService.showComponentName.subscribe((companiesQty => {
this.totalCompanies = companiesQty; }));

 this.dataService.showComponentitle.subscribe((subTitle => {
   this.component_sub_title = subTitle; }));
 
  }

}
