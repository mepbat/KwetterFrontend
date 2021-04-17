import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from 'src/app/shared/models/tweet'
import {TimeAgoExtendsPipe} from '../../app.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet = {} as Tweet;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if(JSON.stringify(this.tweet) === '{}'){
      console.log("AAAAA");
    }
  }

  navigateToUser(username: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['profile', username]));
  }

}
