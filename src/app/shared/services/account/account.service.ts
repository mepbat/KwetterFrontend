import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Account} from '../../models/account';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TokenStorageService} from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.tokenStorage.getToken()
    })
  };

  constructor(
    private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  getAccountByUsername (username: string): Observable<Account>{
    return this.http.get<Account>(environment.api + 'account/' + 'getAccountByUsername/' +username);
  }

  saveAccount(account: Account): Observable<any> {
    return this.http.put<Account>(environment.api + 'account/', account);
  }

  searchAccounts(searchInput: string): Observable<any> {
    return this.http.get<any>(environment.api + 'account/' + 'search/' + searchInput)
  }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.api + 'account', this.httpOptions)
  }
}
