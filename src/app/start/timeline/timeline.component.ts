import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {TweetService} from '../../shared/services/tweet/tweet.service';
import {tweet} from '../../shared/models/tweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tweets = [] as tweet[];

  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getTimeline().subscribe(
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
