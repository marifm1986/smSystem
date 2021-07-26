import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  actionSelected: any;
  constructor() { }
  actions = [] = [
    {
      id: 1,
      name: 'home',
      route: 'companies'
    },
   
 
  
    {
      id: 6,
      name: 'total stock',
      route: 'product_list'
    },
   
    {
      id: 8,
      name: 'user',
      route: 'employee_list'
    },
    {
      id: 8,
      name: 'employee',
      route: 'employees'
    },
  ];
  ngOnInit(): void {
  }
  onSelect(action: any) {
    this.actionSelected = action;
  }


}
