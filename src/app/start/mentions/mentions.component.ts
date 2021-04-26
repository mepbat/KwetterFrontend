import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {Tweet} from '../../shared/models/tweet';
import {MentionService} from '../../shared/services/mention/mention.service';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {
  tweets = [] as Tweet[];


  constructor(private tokenService: TokenStorageService, private mentionService: MentionService) { }

  ngOnInit(): void {
    this.mentionService.getMentions(this.tokenService.getUsername()).subscribe(
      data => {
        if(data !== null) {
          this.tweets = data as Tweet[];
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
