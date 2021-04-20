import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MentionService {

  constructor(
    private http: HttpClient
  ) {
  }
  getMentions(username: string): Observable<any>{
    return this.http.get<any>(environment.api + 'mention/' + 'getMentions/' + username, httpOptions)
  }
}
