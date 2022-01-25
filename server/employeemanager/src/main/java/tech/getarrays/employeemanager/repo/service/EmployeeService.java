package tech.getarrays.employeemanager.repo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.exception.UserNotFoundException;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repo.EmployeeRepo;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
         return  employeeRepo.findAll();
    }
    public Employee updateEmployee(Employee employee, Long id){
        Employee e=employeeRepo.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("User By id "+id+"not found"));
        e.setName(employee.getName());
        e.setEmail(employee.getEmail());
        e.setJobTitle(employee.getJobTitle());
        e.setPhone(employee.getPhone());
        e.setImageUrl(employee.getImageUrl());
        return employeeRepo.save(e);
    }
    public Employee findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("User By id "+id+"not found"));
    }
    public void deleteEmployee(Long id){
        Employee e=employeeRepo.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("User By id "+id+"not found"));
        employeeRepo.delete(e);
    }
}
