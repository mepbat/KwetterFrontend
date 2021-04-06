import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {Tweet} from '../../shared/models/tweet';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tweets = [] as Tweet[];
  private subscriptionName: Subscription; //important to create a subscription

  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService) {
    this.subscriptionName = this.tweetService.getUpdate().subscribe(
      message => {
        message = new Tweet(message['id'], message['text'], message['date'], message['username'])
        this.tweets.unshift(message);
        this.tweets.pop();
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.subscriptionName = this.tweetService.getTimeline().subscribe(
      data => {
        console.log(data);
        this.tweets = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
