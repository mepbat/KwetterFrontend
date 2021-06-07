import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Follow} from '../../models/follow';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TokenStorageService} from '../token-storage/token-storage.service';



@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private subjectName = new Subject<any>(); //need to create a subject

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.tokenService.getToken()
    })
  };

  httpOptionsText = {
    headers: new HttpHeaders({
      'Content-Type': 'text',
      'accept': 'text/plain',
      'responseType': 'text',
      'Authorization': 'Bearer '+ this.tokenService.getToken()
    })
  };

  constructor(
    private http: HttpClient, private tokenService: TokenStorageService
  ) {
  }

  sendUpdate(message: string) { //the component that wants to update something, calls this fn
    this.subjectName.next(message); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  follow (follow: Follow): Observable<any>{
    return this.http.post<Follow>(environment.api + 'follow/', follow, this.httpOptions)
  }

  unfollow (follow: Follow): Observable<any>{
    return this.http.post( environment.api + 'follow/unfollow', follow, this.httpOptionsText);
  }

  isFollowing(accountId: string, followingAccountId: number): Observable<any> {
    return this.http.get<any>(environment.api + 'follow/isFollowing/' + accountId + '/' + followingAccountId, this.httpOptions)
  }

  getFollowers(accountId: string): Observable<any>{
    return this.http.get<any>(environment.api + 'follow/followers/' + accountId, this.httpOptions)
  }

  getFollowing(accountId: string): Observable<any>{
    return this.http.get<any>(environment.api + 'follow/following/' + accountId, this.httpOptions)
  }
}
