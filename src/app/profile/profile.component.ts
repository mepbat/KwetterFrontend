import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../shared/services/account/account.service';
import {Account} from '../shared/models/account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  account = {} as Account;
  private subject: any;
  username!: string;

  constructor(private route: ActivatedRoute, private accountService: AccountService, private router: Router) {
    this.subject = this.route.params.subscribe(params => {
      this.username = params['username'];
    });
    if (this.username != null) {
      this.accountService.getAccountByUsername(this.username).subscribe(
        data => {
          if(data === null){
            this.router.navigate([''])
          }
          this.account = data as Account;
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  navigateToEditProfile(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['edit-profile']));
  }
}
