import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  signupApi(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9898/public/signup", user)
  }

  loginApi(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9898/public/login", user)
  }
}
