import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employeemanager } from '../employeemanager';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employees : Employeemanager= new Employeemanager();
  id: number; 
  constructor(private employeeService: EmployeeServiceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employees=data;
    })

  }
  gotoEmployee(){
    this.router.navigate(['/employee']);
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.employees,this.id).subscribe(data=>{
      this.employees=data;
      this.gotoEmployee();
    });
  }
}

