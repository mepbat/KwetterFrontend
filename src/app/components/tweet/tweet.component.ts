import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Tweet} from 'src/app/shared/models/tweet';
import {TimeAgoExtendsPipe} from '../../app.module';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnChanges{
  @Input() tweet = {} as Tweet;

  constructor(private router: Router) {

  }

  navigateToUser(username: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['profile', username]));
  }


  convertTZ(date: any, tzString: string) {
    return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}));
  }

  ngOnChanges(): void {
    if (this.tweet != undefined && this.tweet.date != undefined) {
      this.tweet.date = this.convertTZ(this.tweet.date, Intl.DateTimeFormat().resolvedOptions().timeZone);
      let time = this.tweet.date.getTime();
      //Check if timezoneOffset is positive or negative
      if (this.tweet.date.getTimezoneOffset() <= 0) {
        //Convert timezoneOffset to hours and add to Date value in milliseconds
        let final = time + (Math.abs(this.tweet.date.getTimezoneOffset() * 60000));
        //Convert from milliseconds to date and convert date back to ISO string
        this.tweet.date = new Date(final);
      } else {
        let final = time + (-Math.abs(this.tweet.date.getTimezoneOffset() * 60000));
        this.tweet.date = new Date(final);
      }
    }
  }

}
