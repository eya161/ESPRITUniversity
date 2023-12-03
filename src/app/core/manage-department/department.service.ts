import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http:HttpClient) { }
  
  getAllDepartments(){
    return this.http.get("http://localhost:8082/Department/department");
  }

  getAllUniversity(){
    return this.http.get("http://localhost:8082/Universite/university");
  }

  addDepartment(data:any,id:any){
    return this.http.post("http://localhost:8082/Department/addDepartmentWithUni/"+id,data);
  }

  deleteDepartment(id:any){
    return this.http.delete("http://localhost:8082/Department/deleteDepartment/"+id);
  }

  editDepartment(data:any){
    return this.http.put("http://localhost:8082/Department/updateDepartment",data);
  }

  getDepartmentById(id:number){
    return this.http.get("http://localhost:8082/Department/Department/"+id);
  }


  getDepartmentByNom(nom:number){
    return this.http.get("http://localhost:8082/Department/department/"+nom);
  }

  getDepartmentStat(){
    return this.http.get("http://localhost:8082/Department/DepartmentsStatistiques");
  }
}
