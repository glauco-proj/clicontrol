import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/v1/auth/login';

  login(email:string, password:string){
    return this.http.post<any>(this.baseUrl, {'email' : email, 'password': password})
      .pipe(map(result => {
        if(result && result.access_token){
          localStorage.setItem('currentToken', result.access_token);
          localStorage.setItem('currentUser', JSON.stringify(result.user));
          return true;
        }
        return false;
      }));
  }
}
