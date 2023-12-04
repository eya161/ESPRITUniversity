import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from 'src/app/model/foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  file="C:/Users/MSI/IdeaProjects/projet spring/uploads/files/"
  constructor(private http: HttpClient) { }
  
  getAllFoyers() {
    return this.http.get("http://localhost:8082/Foyer/foyer");
  }

  getFoyerById(id:any):Observable<any>{
    return this.http.get("http://localhost:8082/Foyer/foyer/"+id);
  }

 
addFoyer(foyer: Foyer): Observable<Foyer> {
  return this.http.post<Foyer>("http://localhost:8082/Foyer/addfoyer",foyer);
}
 
uploadFoyerImage(idFoyer: any,img : any) {
  return this.http.post("http://localhost:8082/Foyer/upload/"+idFoyer, img);
}

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>("http://localhost:8082/Foyer/updatefoyer",foyer)
  }
  uploadFoyerImagee(idFoyer: any,file: File): Observable<Foyer> {
  const formData: FormData = new FormData();
  formData.append('file', file);  // Use 'file' instead of 'fileImage'

  return this.http.post<Foyer>(`http://localhost:8082/Foyer/upload/${idFoyer}`,  formData);
  }
 
  /*uploadImage(idFoyer: number, file: File): Observable<Foyer> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);


    return this.http.post<Foyer>("http://localhost:8082/upload/"+idFoyer, formData);
  }*/
  
  // uploadFoyer(idFoyer: any, image: any) {
  //   const formData = new FormData();
  //   formData.append("idFoyer", idFoyer);
  //   formData.append("image", image);
  //   return this.http.post("http://localhost:8082/upload/", formData);
  // }
  /* 

  uploadFoyer(idFoyer: any, image: any) {
    const formData = new FormData();
    formData.append("idFoyer", idFoyer);
    formData.append("image", image);
    return this.http.post("http://localhost:8082/upload/", formData);
  }*/
  deleteFoyer(id :any)
  {
    return this.http.delete("http://localhost:8082/Foyer/deletefoyer/"+id)
  }
 /* deleteUniv(idFoyer: any){
    return this.http.delete<[Foyer]>("http://localhost:8082/deleteuniversite/"+idFoyer);
  }*/
  
}
