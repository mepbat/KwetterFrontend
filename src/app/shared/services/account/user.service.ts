import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = '/Account';

  constructor(
    private http: HttpClient
  ) {
  }
  GetStuff() {
    return this.http.get<Account[]>(this.Url + '/');
  }
}
