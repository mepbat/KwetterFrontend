import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {Tweet} from '../../shared/models/tweet';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-last-tweet',
  templateUrl: './last-tweet.component.html',
  styleUrls: ['./last-tweet.component.css']
})
export class LastTweetComponent implements OnInit {
  tweet = {} as Tweet;
  private subscriptionName: Subscription; //important to create a subscription

  constructor(private tokenService: TokenStorageService, private tweetService: TweetService) {
    this.subscriptionName = this.tweetService.getUpdate().subscribe(
      message => {
        message = new Tweet(message['id'], message['text'], message['date'], message['username'])
        this.tweet = message;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.tweetService.getLastTweet(this.tokenService.getUsername()).subscribe(
      data => {
        this.tweet = data as Tweet;
      },error => {
        console.log(error);
      }
    )
  }

}
