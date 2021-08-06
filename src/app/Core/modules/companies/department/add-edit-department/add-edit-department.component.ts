import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Core/services/shared.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {
  @Input() dep: any;
  DepartmentID: number = 0;
  DepartmentName: string = '';
  successMess = '';
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.DepartmentID = this.dep.DepartmentID;
    this.DepartmentName = this.dep.DepartmentName;
    this.getDepartmentList();
  }


  addDepartment() {
    var val = {
      DepartmentID: this.DepartmentID,
      DepartmentName: this.DepartmentName
    }
    this.service.addDepartment(val).subscribe(res => {
      this.successMess = res.toString();
    })
    this.getDepartmentList();
  }

  getDepartmentList() {
    this.service.getDepList().subscribe(data => {
      this.dep = data;
    })
  }
  updateDepartment() {
    var val = {
      DepartmentID: this.DepartmentID,
      DepartmentName: this.DepartmentName
    }
    this.service.updateDepartment(val).subscribe(res => {
      this.successMess = res.toString();
    })
  }
}
