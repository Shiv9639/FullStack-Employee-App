import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employeemanager } from '../employeemanager';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employees : Employeemanager= new Employeemanager();
  constructor(private employeeService: EmployeeServiceService, private router :Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.addEmployees(this.employees);
  console.log(this.employees);
}
gotoEmployee(){
  this.router.navigate(['/employee']);
}
private addEmployees(employees : Employeemanager){
  this.employeeService.addEmployee(employees).subscribe(data=>{
    this.employees=data;
    this.gotoEmployee();
  })
}
}
