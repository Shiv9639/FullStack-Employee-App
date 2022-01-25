import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employeemanager } from './employeemanager';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl: "http://localhost:8080/employee";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employeemanager[]>{
    return this.httpClient.get<Employeemanager[]>(`http://localhost:8080/employee/all`);
  }

  addEmployee(employee: Employeemanager): Observable<Employeemanager>{
    return this.httpClient.post<Employeemanager>(`http://localhost:8080/employee/add`,employee);
  }

  getEmployeeById(id :number): Observable<Employeemanager>{
    return this.httpClient.get<Employeemanager>(`http://localhost:8080/employee/find/${id}`);
  }
  updateEmployee(employee: Employeemanager, id: number): Observable<Employeemanager>{
    return this.httpClient.put<Employeemanager>(`http://localhost:8080/employee/update/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<Employeemanager>{
    return this.httpClient.delete<Employeemanager>(`http://localhost:8080/employee/delete/${id}`);
  }
  


}
