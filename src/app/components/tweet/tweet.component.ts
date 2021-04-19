import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from 'src/app/shared/models/tweet'
import {TimeAgoExtendsPipe} from '../../app.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() tweet = {} as Tweet;

  constructor(private router: Router) {
  }

  navigateToUser(username: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['profile', username]));
  }

}
