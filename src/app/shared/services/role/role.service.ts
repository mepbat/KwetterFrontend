import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {role} from '../../models/role';

const ROLE_API = 'http://localhost:8500/role/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RoleService {


  constructor(
    private http: HttpClient
  ) {
  }
  GetStuff() {
    return this.http.get<role[]>(ROLE_API);
  }}
