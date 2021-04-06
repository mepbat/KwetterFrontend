import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tweet} from '../../models/tweet';
import {Observable, Subject} from 'rxjs';
const TWEET_API = 'http://localhost:8500/tweet/'

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
    return this.http.post(TWEET_API, tweet, httpOptions);
  }

  getTimeline(): Observable<Tweet[]>{
    return this.http.get<any>(TWEET_API, httpOptions);
  }

  getMostRecentTweetsByUsername(username: string): Observable<Tweet[]>{
    return this.http.get<any>(TWEET_API + 'getMostRecentTweetsByUsername/' + username, httpOptions)
  }
}
