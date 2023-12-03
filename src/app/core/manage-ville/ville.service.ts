import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from 'src/app/model/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }

  getAllVilles(){
    return this.http.get("http://localhost:8082/Ville/ville");

  }

  GetVilleById(id:any):Observable<any>{
    return this.http.get("http://localhost:8082/Ville/ville/"+id);
  }

  addVille(data:any){
    return this.http.post("http://localhost:8082/Ville/addville",data);
  }

  deleteVille(idVille: any){
    return this.http.delete<[Ville]>("http://localhost:8082/Ville/deleteville/"+idVille);
  }

  editVille(Ville:any)
  {
    return this.http.put("http://localhost:8082/Ville/updateville",Ville)

  }
  countFoyerByville(){
    return this.http.get("http://localhost:8082/Ville/count");
  }
}
