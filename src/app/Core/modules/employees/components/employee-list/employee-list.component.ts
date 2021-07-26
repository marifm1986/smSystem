import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Core/services/shared.service';
import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employeeList: any =[];

  constructor(private shareService: SharedService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.shareService.getEmpList().subscribe(data =>{
      this.employeeList = data;
    })
  }



  
}
