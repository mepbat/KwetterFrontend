import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Follow} from '../../models/follow';
import {Observable, Subject} from 'rxjs';
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
  private subjectName = new Subject<any>(); //need to create a subject

  constructor(
    private http: HttpClient
  ) {
  }

  sendUpdate(message: string) { //the component that wants to update something, calls this fn
    this.subjectName.next(message); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  follow (follow: Follow): Observable<any>{
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
