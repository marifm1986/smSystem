import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Core/services/shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.scss']
})
export class ShowDepartmentComponent implements OnInit {


  departmentList: any = [];

  constructor(private shareService: SharedService) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList() {
    this.shareService.getAllDepartments().subscribe(data => {
      this.departmentList = data;
    })
  }

  onDelete(item: any) {
    if (confirm('Are you Sure?')) {
      this.shareService.deleteDepartment(item.DepartmentID).subscribe(data => {
        alert(data.toString());
        this.getDepartmentList();
      })
    }
  }
}
