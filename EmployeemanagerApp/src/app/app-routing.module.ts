import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'employee', component: EmployeeListComponent},
  {path:'add', component: CreateEmployeeComponent},
  {path:'update/:id', component: UpdateEmployeeComponent},
  {path:'delete/:id', component: DeleteEmployeeComponent},
  {path:'find/:id', component: ViewEmployeeComponent},
  {path: '', redirectTo: 'employee', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
