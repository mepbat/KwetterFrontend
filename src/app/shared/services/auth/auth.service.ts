import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../token-storage/token-storage.service';
import { Credentials } from '../../models/credentials';
const AUTH_API = 'http://localhost:8500/credentials/'

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
    return this.http.post(AUTH_API + 'authenticate', {
      username : credentials.username,
      password : credentials.password
    }, httpOptions);
  }

  register(credentials:Credentials): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username : credentials.username,
      password : credentials.password
    }, httpOptions);
  }

    isSignedIn() {
    return this.tokenStorage.getToken() !== null;
  }

/*  getAccountId(): string {
    const token = this.tokenStorage.getToken();
    const tokenPayload = decode(token);
    return tokenPayload.id;
  }*/
}
