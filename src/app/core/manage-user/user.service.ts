import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8082/users';
  getUserById(id:any){
    return this.http.get<User>(`${this.apiUrl}/getUserDetails/`+id);
  }
  updateUserWithoutPwd(data:any){
    return this.http.put(`${this.apiUrl}/updateUser`, data);
  }
  addUser(data:any){
    return this.http.post(`${this.apiUrl}/addUser`, data);
  }
  getUsers(){
    return this.http.get(`${this.apiUrl}`);
  }
  deleteUser(id:any){
    return this.http.get(`${this.apiUrl}/deleteUser/`+id);
  }
  
}
