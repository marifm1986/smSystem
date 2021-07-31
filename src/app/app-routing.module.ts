import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './Core/modules/companies/companies.component';
import { DepartmentComponent } from './Core/modules/companies/department/department.component';
import { DashboardComponent } from './Core/modules/dashboard/dashboard.component';
import { EmployeeListComponent } from './Core/modules/employees/components/employee-list/employee-list.component';
import { EmployeesComponent } from './Core/modules/employees/employees.component';

import { ProductsComponent } from './Core/modules/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'companies', pathMatch: 'full'},
  {path: 'employee', component: EmployeesComponent},
  {path: 'products', component: ProductsComponent},
  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'departments', component: DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
