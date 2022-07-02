import { Injectable } from '@angular/core';
import {Login} from '../../model/login.interface';
import {Response} from '../../model/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  loginByEmail(form:Login):Observable<Response>{
    return this.http.post<Response>("/api/usuario/login",form);

  }


}
