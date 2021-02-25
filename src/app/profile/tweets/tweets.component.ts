import { Component, OnInit } from '@angular/core';
import {tweet} from '../../../models/tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  date:Date = new Date();
  tweets: tweet[] = [];
  constructor() { }

  ngOnInit(): void {
    let tweet : tweet = {text: "tweeeeet",date: new Date()};
    for(let i = 0; i <10; i++){
      this.tweets.push(tweet);
    }
  }
}
