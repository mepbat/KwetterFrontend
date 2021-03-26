import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tweet} from '../../models/tweet';
import {Observable} from 'rxjs';
const TWEET_API = 'http://localhost:8083/tweet/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(
    private http: HttpClient
  ) {
  }

  createTweet(tweet: tweet): Observable<any> {
    return this.http.post(TWEET_API, tweet, httpOptions);
  }

  getTimeline(): Observable<tweet[]>{
    return this.http.get<any>(TWEET_API, httpOptions);
  }
}
