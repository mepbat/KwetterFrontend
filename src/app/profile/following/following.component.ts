import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../../shared/models/account';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {FollowService} from '../../shared/services/follow/follow.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  @Input() account = {} as Account;
  following = [] as Account[];

  constructor(private tokenService: TokenStorageService, private followService: FollowService) {
/*    this.followService.getFollowing(this.account.id.toString()).subscribe(
      data => {
        this.following = data;
      }
    );*/
  }

  ngOnInit(): void {
  }

}
