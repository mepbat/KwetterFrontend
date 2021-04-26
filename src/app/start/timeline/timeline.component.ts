import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {Tweet} from '../../shared/models/tweet';
import {Subscription} from 'rxjs';
import {FollowService} from '../../shared/services/follow/follow.service';
import {Account} from '../../shared/models/account';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  following = [] as Account[];
  tweets = [] as Tweet[];
  followingIds = [] as number[]
  private subscriptionName: Subscription; //important to create a subscription

  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService, private followService: FollowService) {
    this.subscriptionName = this.tweetService.getUpdate().subscribe(
      message => {
        message = new Tweet(message['id'], message['text'], message['date'], message['username'])
        this.tweets.unshift(message);
        if(this.tweets.length > 10){
          this.tweets.pop();
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.followingIds.push(+(this.tokenService.getId()));
    this.followService.getFollowing(this.tokenService.getId()).subscribe(
      data => {
        this.following = data as Account[];
        this.following.forEach(follow => {
          this.followingIds.push(follow.id);
        });
        this.subscriptionName = this.tweetService.getTimeline(this.followingIds).subscribe(
          data => {
            this.tweets = data;
          },
          error => {
            console.log(error);
          }
        )
        },
      error => {
        console.log(error);
      }
    )
  }

}
