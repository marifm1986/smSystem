import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  ActivateAddEditDepComp = false;
  modalTitle: string = '';
  departmentList: any = [];
  dep: any;

  constructor(private shareService: SharedService) { }

  ngOnInit(): void {
    // this.getDepartmentList();
  }



  // getDepartmentList() {
  //   this.shareService.getDepList().subscribe(data => {
  //     this.departmentList = data;
  //   })
  // }


}
