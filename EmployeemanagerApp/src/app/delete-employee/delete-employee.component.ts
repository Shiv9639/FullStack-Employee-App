import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employeemanager } from '../employeemanager';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employees : Employeemanager= new Employeemanager();
  id: number; 
  constructor(private employeeService: EmployeeServiceService, private router: Router,private route: ActivatedRoute) { }

  gotoEmployee(){
    this.router.navigate(['/employee']);
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.deleteEmployee(this.id).subscribe(data=>{
      this.employees=data;
      this.gotoEmployee();
    })
  }

}
