import {AfterContentInit, AfterViewInit, Component, Input, OnChanges} from '@angular/core';
import {Account} from '../../shared/models/account';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {FollowService} from '../../shared/services/follow/follow.service';
import {Follow} from '../../shared/models/follow';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnChanges {
  @Input() account = {} as Account;
  isFollowing: boolean = false;
  fol = {} as Follow;
  ownAccount: boolean = true;

  constructor(private tokenService: TokenStorageService, private followService: FollowService) {
    if (this.account.id != null) {
      this.ownAccount = this.tokenService.getId() == this.account.id.toString();
    }
  }

  // Runs whenever component @Inputs change
  ngOnChanges() {
    if (this.account.id != null) {
      this.ownAccount = this.tokenService.getId() == this.account.id.toString();
      if (this.tokenService.getId() != this.account.id.toString()) {
        this.fol.accountId = Number(this.tokenService.getId());
        this.fol.followingAccountId = this.account.id;
        this.followService.isFollowing(this.tokenService.getId(), this.account.id).subscribe(
          data => {
            this.isFollowing = data;
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  follow(): void {
    this.followService.follow(this.fol).subscribe(
      data => {
        console.log(data);
        this.isFollowing = true;
        this.fol.id = data.id;
      },
      error => {
        console.log(error);
      }
    );
  }

  unfollow(): void {
    console.log(this.fol);
    this.fol.accountId = Number(this.tokenService.getId());
    this.fol.followingAccountId = this.account.id;
    this.followService.unfollow(this.fol).subscribe(
      data => {
        this.isFollowing = false;
      },
      error => {
        console.log(error);
      }
    );
  }
}
