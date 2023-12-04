import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloc } from 'src/app/model/bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocsService {
  constructor(private http: HttpClient) { }

  getAllBlocs() {
    return this.http.get("http://localhost:8082/Bloc/bloc");
  }

  getBlocById(id:any):Observable<any>{
    return this.http.get("http://localhost:8082/Bloc/bloc/"+id);
  }

  addBloc(bloc :any,idFoyer: any): Observable<Bloc> {
    return this.http.post<Bloc>(`http://localhost:8082/Bloc/addbloc/${idFoyer}`,bloc);
  }
 /* addProj(data: any, idDetail: any) {
    return this.http.post(http://localhost:8082/addProjet/${idDetail}, data);
  }*/

  updateBloc( Bloc:any): Observable<any> {
    return this.http.put("http://localhost:8082/Bloc/updatebloc",Bloc)
   
  }
 
  deleteBloc(id :any)
  {
    return this.http.delete("http://localhost:8082/Bloc/deletebloc/"+id)
  }
}
