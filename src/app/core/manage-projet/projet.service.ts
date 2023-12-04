import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projet } from 'src/app/model/projet';
@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  constructor(private http: HttpClient) {}
  private pdfUrl = 'http://localhost:8082/Projet/projets/pdf'; // Update the URL

  getAllProjets() {
    return this.http.get('http://localhost:8082/Projet/Projet');
  }
  GetProjetById(id: any): Observable<any> {
    return this.http.get('http://localhost:8082/Projet/projet/' + id);
  }

  addProj(data: any, idDetail: any) {
    return this.http.post(
      `http://localhost:8082/Projet/addProjet/${idDetail}`,
      data
    );
  }

  deleteProj(idProjet: any) {
    return this.http.delete<[Projet]>(
      'http://localhost:8082/Projet/Projet/' + idProjet
    );
  }

  editProjet(Projet: any) {
    return this.http.put('http://localhost:8082/Projet/updateProjet', Projet);
  }

  getPDF(): Observable<Blob> {
    return this.http.get(this.pdfUrl, { responseType: 'blob' });
  }

  filterProjets(criteria: any): Observable<Projet[]> {
    return this.http.get<Projet[]>(
      'http://localhost:8082/Projet/filterProjets',
      {
        params: criteria,
      }
    );
  }
}
