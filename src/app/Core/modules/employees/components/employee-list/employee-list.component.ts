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
  employeeList: any = [];

  ActivateAddEditEmpComp = false;
  modalTitle: string = '';
  emp: any;


  constructor(private shareService: SharedService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.shareService.getEmpList().subscribe(data => {
      this.employeeList = data;
    })
  }
  addClick() {
    this.emp = {
      EmployeeID: 0,
      EmployeeCode: '',
      EmployeeName: '',
      Department: '',
      MobileNo: '',
      EmailId: '',
      Address: '',
      Slary: 0,
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png',
    }
    this.modalTitle = "Add Employee"
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.modalTitle = "Edit Employee"
    this.ActivateAddEditEmpComp = true;
    this.emp = item;
  }

  onDelete(item: any) {
    if (confirm('Are you Sure?')) {
      this.shareService.deleteEmployee(item.EmployeeID).subscribe(data => {
        alert(data.toString());
        this.getEmployeeList();
      })
    }
  }



  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.getEmployeeList();
  }





}
