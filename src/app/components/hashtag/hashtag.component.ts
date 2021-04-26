import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent {
  @Input()
  tag = '' as string
  constructor(private router: Router) { }


  navigateToTag(){
    this.router.navigate(['tag', this.tag])
  }

}
