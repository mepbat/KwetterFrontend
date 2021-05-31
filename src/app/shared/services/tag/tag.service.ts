import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TokenStorageService} from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

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

  getTrends(): Observable<any>{
    return this.http.get<any>(environment.api + 'tag/' + 'trends', this.httpOptions)
  }

  searchTags(searchInput: string): Observable<any>{
    return this.http.get<any>(environment.api + 'tag/' + 'search/' + searchInput, this.httpOptions)
  }
}
