import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProjet } from 'src/app/model/DetailProjet';

@Injectable({
  providedIn: 'root',
})
export class DetailProjetService {
  private pdfUrl = 'http://localhost:8082/DetailProjet/detailsProjet/pdf';
  private apiUrl = 'http://localhost:8082/DetailProjet/filter';

  constructor(private http: HttpClient) {}

  getAllDetails(): Observable<any> {
    return this.http.get('http://localhost:8082/DetailProjet/DetailProjet');
  }

  GetDetailById(id: any): Observable<any> {
    return this.http.get(
      'http://localhost:8082/DetailProjet/DetailProjet/' + id
    );
  }

  addDetail(data: any): Observable<any> {
    return this.http.post(
      'http://localhost:8082/DetailProjet/addDetailProjet',
      data
    );
  }

  deleteDetail(idDetail: any): Observable<DetailProjet[]> {
    return this.http.delete<DetailProjet[]>(
      'http://localhost:8082/DetailProjet/DetailProjet/' + idDetail
    );
  }

  editDetail(DetailProjet: any): Observable<any> {
    return this.http.put(
      'http://localhost:8082/DetailProjet/updateDetailProjet',
      DetailProjet
    );
  }

  getPDF(): Observable<Blob> {
    return this.http.get(this.pdfUrl, { responseType: 'blob' });
  }

  filterDetails(
    descriptionDetail: string,
    technologie: string
  ): Observable<DetailProjet[]> {
    const params = {
      descriptionDetail: descriptionDetail,
      technologie: technologie,
    };

    return this.http.get<DetailProjet[]>(this.apiUrl, {
      params: params,
    });
  }

  addDetailWithProjectId(projectId: number, data: any): Observable<any> {
    return this.http.post(
      `http://localhost:8082/DetailProjet/affecterProjet/${projectId}`,
      data
    );
  }
}
