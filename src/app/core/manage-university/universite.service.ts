import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from 'src/app/model/images';
import { Universite } from 'src/app/model/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  constructor(private http:HttpClient) { }

  getAllUnivs():Observable<any[]>{
    return this.http.get<[]>("http://localhost:8082/Universite/universite");

  }
  GetUniversiteById(id:any):Observable<any>{
    return this.http.get("http://localhost:8082/Universite/universite/"+id);
  }



  deleteUniv(idUniversite: any){
    return this.http.delete<[Universite]>("http://localhost:8082/Universite/deleteuniversite/"+idUniversite);
  }
  deleteUnivParLot(ids: any){
    return this.http.delete(`http://localhost:8082/Universite/deleteuniversite/all/${ids.join(',')}`);
  }
 /* editUniv(uni:any){
    return this.http.put<any>("http://localhost:8082/universite/updateuniversite",uni);
  }*/
  editUniversite(Universite:any)
  {
    return this.http.put("http://localhost:8082/Universite/updateuniversite",Universite)

  }
  /////codeajoute
  editUniversitee( formData: FormData,selectedVille: any, mediaList: Images): Observable<Universite>
  {

    return this.http.put<Universite>(`http://localhost:8082/Universite/updateuniversite/${selectedVille}`, formData);

  }
  getUniversiteByVille(idVille: any): Observable<any> {
    return this.http.get(`http://localhost:8082/Universite/universitebyville/${idVille}`);
  }
  getDepartementsByUniversite(idUniversite:any):Observable<any>{
    return this.http.get(`http://localhost:8082/Universite/getDepartementsByUniversite/${idUniversite}`);
  }
  getDataByFiltre(idVille:any,idUniversite:any,idDepartement:any):Observable<any>{
    return this.http.get("http://localhost:8082/Universite/getDataByFiltre/"+idVille+"/"+idUniversite+"/"+idDepartement);
  }

  addUniv(formData: FormData,selectedVille: any,  mediaList: Images): Observable<Universite> {
    // Ajoutez chaque fichier de la liste à FormData avec la clé 'files'


    return this.http.post<Universite>(`http://localhost:8082/Universite/addUniversite/${selectedVille}`, formData);
  }
/*  addUniv(data:any, selectedVille:any){
    return this.http.post("http://localhost:8082/addUniversite/"+selectedVille,data);
  }*/
}
