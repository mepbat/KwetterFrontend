import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../shared/services/account/account.service';
import {Account} from '../shared/models/account';
import {TokenStorageService} from '../shared/services/token-storage/token-storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  account = {} as Account;

  constructor(private tokenService: TokenStorageService, private accountService: AccountService, private router: Router) {
    if (this.tokenService.getUsername() != null) {
      this.accountService.getAccountByUsername(this.tokenService.getUsername()).subscribe(
        data => {
          if (data === null) {
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

  saveProfile(){
    this.account.id = Number(this.tokenService.getId());
    this.account.username = this.tokenService.getUsername();
    console.log(this.account);
    this.accountService.saveAccount(this.account).subscribe(
      data =>{
        console.log(data);
          this.router.navigate(['profile/' + this.account.username])
      },
      error => {
        console.log(error);
      }
    )
  }
}
