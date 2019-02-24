import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/v1/fibonacciSeries';

  getSequence(initial:string, size:string){
    let token = '?token='+localStorage.getItem('currentToken');
    return this.http.post<any>(this.baseUrl+token, {'initial' : initial, 'size': size})
      .pipe(map(result => {
        if(result){
          return result;
        }
        return false;
      }));
  }
}
