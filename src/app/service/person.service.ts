import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/v1/personInfo';

  getAll(){
    let token = '?token='+localStorage.getItem('currentToken');
    return this.http.get<Person[]>(this.baseUrl+token);
  }

  log(person: Person){
    let token = '?token='+localStorage.getItem('currentToken');
    return this.http.post<Person>(this.baseUrl+'/save'+token, person);
  }
}
