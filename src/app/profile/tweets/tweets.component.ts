import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../shared/models/tweet';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {Account} from '../../shared/models/account';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input() account = {} as Account;
  tweets = [] as Tweet[]
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    if(this.account.username != null) {
      this.tweetService.getMostRecentTweetsByUsername(this.account.username).subscribe(
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
}
