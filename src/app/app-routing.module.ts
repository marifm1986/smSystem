import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './Core/modules/companies/companies.component';
import { DepartmentComponent } from './Core/modules/companies/department/department.component';
import { DashboardComponent } from './Core/modules/dashboard/dashboard.component';
import { EmployeesComponent } from './Core/modules/employees/employees.component';
import { ProductListComponent } from './Core/modules/products/components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'companies', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'product_list', component: ProductListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'deparments', component: DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
