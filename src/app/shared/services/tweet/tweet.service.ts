import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tweet} from '../../models/tweet';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TweetService {
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

  createTweet(tweet: Tweet): Observable<any> {
    return this.http.post(environment.api + 'tweet/', tweet, httpOptions);
  }

  getTimeline(ids: number[]): Observable<Tweet[]>{
    return this.http.get<any>(environment.api + 'tweet/' + ids, httpOptions);
  }

  getMostRecentTweetsByUsername(username: string): Observable<Tweet[]>{
    return this.http.get<any>(environment.api + 'tweet/' + 'getMostRecentTweetsByUsername/' + username, httpOptions)
  }

  getLastTweet(username: string): Observable<Tweet>{
    return this.http.get<any>(environment.api + 'tweet/' + 'getLastTweet/' + username, httpOptions)
  }
}
