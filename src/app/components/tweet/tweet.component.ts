import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from 'src/app/shared/models/tweet'
import {TimeAgoExtendsPipe} from '../../app.module';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet = {} as Tweet;

  constructor() {
  }

  ngOnInit(): void {
  }

}
