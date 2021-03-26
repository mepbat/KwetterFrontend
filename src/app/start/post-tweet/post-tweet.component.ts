import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {tweet} from '../../shared/models/tweet';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweet = {} as tweet;

  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService) { }

  ngOnInit(): void {
  }

  newTweet(): void {
    this.tweet.date = new Date();
    this.tweet.id = parseInt(this.tokenService.getId());
    this.tweetService.createTweet(this.tweet).subscribe(
      data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
}
