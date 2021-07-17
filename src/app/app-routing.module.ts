import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './Core/modules/companies/companies.component';
import { DashboardComponent } from './Core/modules/dashboard/dashboard.component';
import { EmployeeListComponent } from './Core/modules/employees/components/employee-list/employee-list.component';
import { ProductListComponent } from './Core/modules/products/components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'companies', pathMatch: 'full'},
  {path: 'employee_list', component: EmployeeListComponent},
  {path: 'product_list', component: ProductListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'companies', component: CompaniesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
