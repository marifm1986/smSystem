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
      id: 2,
      name: 'total stock',
      route: ''
    },
   
    {
      id: 3,
      name: 'user',
      route: ''
    },
    {
      id: 4,
      name: 'employee',
      route: 'employee'
    },
    {
      id: 5,
      name: 'departments',
      route: 'departments'
    }
  ];
  ngOnInit(): void {
  }
  onSelect(action: any) {
    this.actionSelected = action;
  }


}
