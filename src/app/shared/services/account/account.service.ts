import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../models/account';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient) {
  }

  getAccountByUsername (username: string): Observable<Account>{
    return this.http.get<Account>(environment.api + 'account/' + 'getAccountByUsername/' +username);
  }

  saveAccount(account: Account): Observable<any> {
    return this.http.put<Account>(environment.api + 'account/', account);
  }
}
