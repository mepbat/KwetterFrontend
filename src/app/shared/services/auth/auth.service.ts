import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../token-storage/token-storage.service';
import { Credentials } from '../../models/credentials';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.tokenStorage.getToken()
    })
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  authenticate(credentials:Credentials): Observable<any> {
    return this.http.post(environment.api + 'credentials/' + 'authenticate', {
      username : credentials.username,
      password : credentials.password
    });
  }

  register(credentials:Credentials): Observable<any> {
    return this.http.post(environment.api + 'credentials/' + 'register', {
      username : credentials.username,
      password : credentials.password
    });
  }

  getAll(): Observable<any>{
    return this.http.get(environment.api + 'credentials/' + 'getAll');
  }

  activate(username: string): Observable<any>{
    return this.http.get(environment.api + 'credentials/' + 'activate/' + username, this.httpOptions);
  }

  deactivate(username: string): Observable<any> {
    return this.http.get(environment.api + 'credentials/' + 'deactivate/' + username, this.httpOptions);
  }

  promote(username: string): Observable<any> {
    return this.http.get(environment.api + 'credentials/' + 'promote/' + username, this.httpOptions);
  }

/*  getAccountId(): string {
    const token = this.tokenStorage.getToken();
    const tokenPayload = decode(token);
    return tokenPayload.id;
  }*/
}
