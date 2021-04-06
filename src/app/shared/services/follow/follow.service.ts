import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {follow} from '../../models/follow';

const FOLLOW_API = 'http://localhost:8500/follow/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FollowService {


  constructor(
    private http: HttpClient
  ) {
  }
  GetStuff() {
    return this.http.get<follow[]>(FOLLOW_API);
  }}
