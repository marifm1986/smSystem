import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-sidebar',
  templateUrl: './sub-sidebar.component.html',
  styleUrls: ['./sub-sidebar.component.scss']
})
export class SubSidebarComponent implements OnInit {

  actionSelected: any;
  constructor() { }
  actions = [] = [
    {
      id: 1,
      name: 'dashboard',
      route: 'dashboard'
    },
    {
      id: 2,
      name: 'product',
      route: 'product_list'
    },
    {
      id: 3,
      name: 'purchase',
      route: 'product_list'
    },
    {
      id: 4,
      name: 'sale',
      route: 'product_list'
    },
    {
      id: 5,
      name: 'report',
      route: 'product_list'
    },
    {
      id: 6,
      name: 'stock',
      route: 'product_list'
    },
    {
      id: 7,
      name: 'customer',
      route: 'product_list'
    },
    {
      id: 8,
      name: 'user',
      route: 'employee_list'
    },
  ];
  ngOnInit(): void {
  }
  onSelect(action: any) {
    this.actionSelected = action;
  }

}
