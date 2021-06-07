import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {Tweet} from '../../shared/models/tweet';
import {StartComponent} from '../start.component';
import {TimelineComponent} from '../timeline/timeline.component';
import {QuoteService} from '../../shared/services/quote/quote.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweet = {} as Tweet;

  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService, private quoteService: QuoteService) {
  }

  ngOnInit(): void {
  }

  newTweet(): void {
    this.tweet.date = this.convertTZ(new Date, Intl.DateTimeFormat().resolvedOptions().timeZone)
    console.log(this.tweet.date);
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

  convertTZ(date: any, tzString: string) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
  }

  randomQuote(){
    this.quoteService.getQuote().subscribe(
      data => {
        console.log(data);
        this.tweet.text = data.message + ' - Donald Trump'
      },
      error => {
        console.log(error);
      }
    )
  }
}
