import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModules } from "./material/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/gaurds/components/login/login.component';
import { UserComponent } from './Core/gaurds/components/user/user.component';
import { HeaderComponent } from './Core/modules/shared/components/header/header.component';
import { SidebarComponent } from './Core/modules/shared/components/sidebar/sidebar.component';
import { FooterComponent } from './Core/modules/shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './Core/modules/employees/components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './Core/modules/employees/components/new-employee/new-employee.component';
import { ProductListComponent } from './Core/modules/products/components/product-list/product-list.component';
import { DashboardComponent } from './Core/modules/dashboard/dashboard.component';
import { CompaniesComponent } from './Core/modules/companies/companies.component';
import { SubSidebarComponent } from './Core/modules/shared/components/sub-sidebar/sub-sidebar.component';
import { ConvertoSpacesPipe } from './Core/modules/shared/pipes/convert-to-spaces.pipe';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";
import { ProductDetailsComponent } from './Core/modules/products/components/product-details/product-details.component';
import { EmployeesComponent } from './Core/modules/employees/employees.component';
import { EmployeeComponent } from './Core/modules/employees/components/employee/employee.component';
import { DepartmentComponent } from './Core/modules/companies/department/department.component';
import { AddEditDepartmentComponent } from './Core/modules/companies/department/add-edit-department/add-edit-department.component';
import { ShowDepartmentComponent } from './Core/modules/companies/department/show-department/show-department.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    EmployeeListComponent,
    NewEmployeeComponent,
    ProductListComponent,
    DashboardComponent,
    CompaniesComponent,
    SubSidebarComponent,
    ConvertoSpacesPipe,
    ProductDetailsComponent,
    EmployeesComponent,
    EmployeeComponent,
    DepartmentComponent,
    AddEditDepartmentComponent,
    ShowDepartmentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...MaterialModules
  ],
  exports: [
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
