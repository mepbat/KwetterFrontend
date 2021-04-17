import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {Tweet} from '../../shared/models/tweet';
import {StartComponent} from '../start.component';
import {TimelineComponent} from '../timeline/timeline.component';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweet = {} as Tweet;

  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService) {
  }

  ngOnInit(): void {
  }

  newTweet(): void {
    this.tweet.date = new Date();
    this.tweet.id = parseInt(this.tokenService.getId());
    this.tweet.username = this.tokenService.getUsername()
    this.tweetService.createTweet(this.tweet).subscribe(
      data => {
        this.tweetService.sendUpdate(data);
      },
      error => {
        console.log(error);
      }
    );
    this.tweet.text = '';
  }
}
