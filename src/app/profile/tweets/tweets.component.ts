import { Component, OnInit } from '@angular/core';
import {tweet} from '../../shared/models/tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  date:Date = new Date();
  tweet : tweet = {id: 1, text: "tweeeeet",date: new Date()};
  tweets: tweet[] = [this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet,this.tweet];
  constructor() { }

  ngOnInit(): void {
    this.tweets.sort(function (a, b) {
      return a.date.getTime() - b.date.getTime()
    });
  }
}
