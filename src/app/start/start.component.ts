import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../shared/services/token-storage/token-storage.service';
import {TweetService} from '../shared/services/tweet/tweet.service';
import {FollowService} from '../shared/services/follow/follow.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


  constructor(private tokenService:  TokenStorageService, private tweetService: TweetService, private followService: FollowService) { }

  ngOnInit(): void {

  }


}
