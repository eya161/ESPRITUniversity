import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'src/app/model/department';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  constructor(private http:HttpClient) { }
  


  getAllClasses(){
    return this.http.get("http://localhost:8082/Classe/Classe");
  }

  addClasse(data:any,id:any){
    return this.http.post("http://localhost:8082/Classe/addDepartmentWithDepartment/"+id,data);
  }

  deleteClasse(id:any){
    return this.http.delete("http://localhost:8082/Classe/deleteClasse/"+id);
  }

  editClasse(data:any){
    return this.http.put("http://localhost:8082/Classe/updateClasse",data);
  }

  getClasseById(id:number){
    return this.http.get("http://localhost:8082/Classe/Classe/"+id);
  }
  getClasseByNom(nom:number){
    return this.http.get("http://localhost:8082/Classe/NomClasse/"+nom);
  }

  getstatDispoclasse(){
    return this.http.get("http://localhost:8082/Classe/AvailableClasse");
  }

  getstatNonDispoclasse(){
    return this.http.get("http://localhost:8082/Classe/UnavailableClasse");
  }

}
