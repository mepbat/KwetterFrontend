import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(
    private http: HttpClient
  ) {
  }

  getQuote(): Observable<any>{
    return this.http.get<any>('https://api.whatdoestrumpthink.com/api/v1/quotes/random', httpOptions);
  }

}
