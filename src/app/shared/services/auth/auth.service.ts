import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../token-storage/token-storage.service';
import { Credentials } from '../../models/credentials';
import {environment} from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  authenticate(credentials:Credentials): Observable<any> {
    return this.http.post(environment.api + 'credentials/' + 'authenticate', {
      username : credentials.username,
      password : credentials.password
    }, httpOptions);
  }

  register(credentials:Credentials): Observable<any> {
    return this.http.post(environment.api + 'credentials/' + 'register', {
      username : credentials.username,
      password : credentials.password
    }, httpOptions);
  }

  getAll(): Observable<any>{
    return this.http.get(environment.api + 'credentials/' + 'getAll', httpOptions);
  }

  activate(username: string): Observable<any>{
    return this.http.get(environment.api + 'credentials/' + 'activate/' + username, httpOptions);
  }

  deactivate(username: string): Observable<any> {
    return this.http.get(environment.api + 'credentials/' + 'deactivate/' + username, httpOptions);
  }

  promote(username: string): Observable<any> {
    return this.http.get(environment.api + 'credentials/' + 'promote/' + username, httpOptions);
  }

/*  getAccountId(): string {
    const token = this.tokenStorage.getToken();
    const tokenPayload = decode(token);
    return tokenPayload.id;
  }*/
}
