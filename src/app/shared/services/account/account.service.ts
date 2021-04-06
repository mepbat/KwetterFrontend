import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../models/account';
import {Observable} from 'rxjs';

const ACC_API = 'http://localhost:8500/account/'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient) {
  }

  getAccountByUsername (username: string): Observable<Account>{
    return this.http.get<Account>(ACC_API + 'getAccountByUsername/' +username)
  }
}
