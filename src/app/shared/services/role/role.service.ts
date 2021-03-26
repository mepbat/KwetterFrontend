import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {role} from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private Url = '/Role';

  constructor(
    private http: HttpClient
  ) {
  }
  GetStuff() {
    return this.http.get<role[]>(this.Url + '/');
  }}
