import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Follow} from '../../models/follow';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'accept': 'text/plain',
    'responseType': 'text'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http: HttpClient
  ) {
  }

  follow (follow: Follow): Observable<Follow>{
    return this.http.post<Follow>(environment.api + 'follow/', follow)
  }

  unfollow (follow: Follow): Observable<any>{
    return this.http.post( environment.api + 'follow/unfollow', follow, {responseType: 'text'});
  }

  isFollowing(accountId: string, followingAccountId: number): Observable<any> {
    return this.http.get<any>(environment.api + 'follow/isFollowing/' + accountId + '/' + followingAccountId)
  }

  getFollowers(accountId: string): Observable<any>{
    return this.http.get<any>(environment.api + 'follow/followers/' + accountId)
  }

  getFollowing(accountId: string): Observable<any>{
    return this.http.get<any>(environment.api + 'follow/following/' + accountId)
  }
}
