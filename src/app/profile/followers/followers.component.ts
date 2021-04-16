import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Account} from '../../shared/models/account';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {FollowService} from '../../shared/services/follow/follow.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnChanges {
  @Input() account = {} as Account;
  followers = [] as Account[];

  constructor(private tokenService: TokenStorageService, private followService: FollowService) {

  }

  ngOnChanges(): void {
/*    console.log(this.account);
    if(this.account != undefined) {
      this.followService.getFollowers(this.account.id.toString()).subscribe(
        data => {
          this.followers = data;
        }
      );
    }*/
  }

}
