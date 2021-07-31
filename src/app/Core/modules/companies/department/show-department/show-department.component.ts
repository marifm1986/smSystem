import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Core/services/shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.scss']
})
export class ShowDepartmentComponent implements OnInit {
  ActivateAddEditDepComp = false;
  modalTitle: string = '';
  departmentList: any = [];
  dep: any;

  constructor(private shareService: SharedService) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }



  getDepartmentList() {
    this.shareService.getDepList().subscribe(data => {
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


  addClick(){
    this.dep={
      DepartmentID:0,
      DepartmentName:'',
    }
    this.modalTitle = "Add Department"
    this.ActivateAddEditDepComp = true;
  }
  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.getDepartmentList();
  }

  editClick(item:any){
    this.modalTitle = "Edit Department"
    this.ActivateAddEditDepComp = true;
    this.dep = item;
  }
}
