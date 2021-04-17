import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Account} from '../../shared/models/account';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {FollowService} from '../../shared/services/follow/follow.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnChanges {
  @Input() account = {} as Account;
  followers = [] as Account[];

  constructor(private tokenService: TokenStorageService, private followService: FollowService, private router: Router) {
  }

  ngOnChanges(): void {
      this.followService.getFollowers(this.account.id.toString()).subscribe(
        data => {
          this.followers = data as Account[];
        }, error => {
          console.log(error);
        }
      );
  }

  navigateToUser(username: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['profile', username]));
  }



}
