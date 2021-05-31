import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MentionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.tokenStorage.getToken()
    })
  };

  constructor(
    private http: HttpClient, private tokenStorage: TokenStorageService
  ) {
  }
  getMentions(username: string): Observable<any>{
    return this.http.get<any>(environment.api + 'mention/' + 'getMentions/' + username, this.httpOptions)
  }
}
