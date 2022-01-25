import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employeemanager } from '../employeemanager';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {  

  employees: Employeemanager[];
  
  constructor(private employeeService: EmployeeServiceService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }
  updateEmployee(id :number){
    this.router.navigate(['/update',id]);
  }
deleteEmployee(id: number){
  this.router.navigate(['/delete',id]);
}
ViewEmployee(id: number){
  this.router.navigate(['/find',id]);
}

}
