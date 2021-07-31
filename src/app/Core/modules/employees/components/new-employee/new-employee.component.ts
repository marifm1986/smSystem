import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Core/services/shared.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  @Input() emp: any;
  EmployeeID: number = 0;
  EmployeeName: string = '';
  Department: string = '';
  DateOfJoining: string = '';
  PhotoFileName: string = '';
  PhotoFilePath: string = '';

  DepartmentList: any = []

  successMess = '';
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getAllDepartments().subscribe((data: any) => {
      this.DepartmentList = data;

      this.EmployeeID = this.emp.EmployeeID;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;


    })
  }


  addEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    }
    this.service.addEmployee(val).subscribe(res => {
      this.successMess = res.toString();
    })
  }
  updateEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    }
    
    this.service.updateEmployee(val).subscribe(res => {
      this.successMess = res.toString();
    })
  }

  UploadPhoto(event: any) {
    var file = event.target.file [0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;

    })
  }

}
