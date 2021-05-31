import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tweet} from '../../models/tweet';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TokenStorageService} from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private subjectName = new Subject<any>(); //need to create a subject

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.tokenStorage.getToken()
    })
  };

  constructor(
    private http: HttpClient, private tokenStorage: TokenStorageService
  ) {
  }

  sendUpdate(message: string) { //the component that wants to update something, calls this fn
    this.subjectName.next(message); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver function will subscribe
  }

  createTweet(tweet: Tweet): Observable<any> {
    return this.http.post(environment.api + 'tweet/', tweet, this.httpOptions);
  }

  getTimeline(ids: number[]): Observable<Tweet[]>{
    return this.http.post<any>(environment.api + 'tweet/getTimeline', ids, this.httpOptions);
  }

  getMostRecentTweetsByUsername(username: string): Observable<Tweet[]>{
    return this.http.get<any>(environment.api + 'tweet/' + 'getMostRecentTweetsByUsername/' + username, this.httpOptions)
  }

  getLastTweet(username: string): Observable<Tweet>{
    return this.http.get<any>(environment.api + 'tweet/' + 'getLastTweet/' + username, this.httpOptions)
  }

  getTweetsByTag(tag: string): Observable<any>{
    return this.http.get<any>(environment.api + 'tweet/' + 'getByTag/' + tag, this.httpOptions);
  }

  hasHearted(tweetId: string, userId: string): Observable<any>{
    return this.http.get<any>(environment.api + 'tweet/' + 'hasHearted/' + tweetId + '/' + userId, this.httpOptions);
  }

  heart(tweetId: string, userId: string): Observable<any>{
    return this.http.post<any>(environment.api + 'tweet/' + 'heart', {
      tweetId: tweetId,
      userId: userId
    }, this.httpOptions);
  }

  unheart(tweetId: string, userId: string): Observable<any>{
    return this.http.post<any>(environment.api + 'tweet/' + 'unheart', {
      tweetId: tweetId,
      userId: userId
    }, this.httpOptions);
  }

}
