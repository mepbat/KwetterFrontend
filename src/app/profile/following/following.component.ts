import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Account} from '../../shared/models/account';
import {TokenStorageService} from '../../shared/services/token-storage/token-storage.service';
import {FollowService} from '../../shared/services/follow/follow.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Tweet} from '../../shared/models/tweet';
import {Follow} from '../../shared/models/follow';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnChanges {
  @Input() account = {} as Account;
  following = [] as Account[];

  constructor(private tokenService: TokenStorageService, private followService: FollowService, private router: Router) {

  }



  ngOnChanges(): void {
    this.followService.getFollowing(this.account.id.toString()).subscribe(
      data => {
        this.following = data as Account[];
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
