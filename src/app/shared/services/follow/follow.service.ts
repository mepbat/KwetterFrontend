import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {follow} from '../../models/follow';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private Url = '/Follow';

  constructor(
    private http: HttpClient
  ) {
  }
  GetStuff() {
    return this.http.get<follow[]>(this.Url + '/');
  }}
