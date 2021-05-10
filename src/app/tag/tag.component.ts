import { Component, OnInit } from '@angular/core';
import {Tweet} from '../shared/models/tweet';
import {ActivatedRoute} from '@angular/router';
import {TagService} from '../shared/services/tag/tag.service';
import {TweetService} from '../shared/services/tweet/tweet.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  tag = '' as string;
  tweets= [] as Tweet[];

  constructor(private route: ActivatedRoute, private tweetService: TweetService) {
    this.route.params.subscribe(params => {
      this.tag = params['tag'];
      if(this.tag.charAt(0) == '#') {
        this.tag = this.tag.substring(1);
      }
      this.tweetService.getTweetsByTag(this.tag).subscribe(
        data => {
          this.tweets = data as Tweet[];
        },
        error => {
          console.log(error);
        }
      )
    });
  }

}
