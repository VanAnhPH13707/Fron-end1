import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLogin, TypeLoginResponse, User } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: TypeLogin): Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.login}`, data)
  }
  register(data: TypeLogin): Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.register}`, data)
  }
  getUsers(): Observable <User[]> {
    return this.http.get<User[]>(environment.users)
  }
  getUser(_id: string): Observable <User> {
    return this.http.get<User>(`${environment.users}/${_id}`);
  }
  
}
