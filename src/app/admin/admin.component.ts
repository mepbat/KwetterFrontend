import { Component, OnInit } from '@angular/core';
import {AccountService} from '../shared/services/account/account.service';
import {Account} from '../shared/models/account';
import {AuthService} from '../shared/services/auth/auth.service';
import {Credentials} from '../shared/models/credentials';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  credentials = [] as Credentials[];
  credentialsShown = [] as Credentials[];
  searchName = '' as string;
  selectedCredentials = [] as Credentials[]

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAll().subscribe(
      data => {
        console.log(data);
        this.credentials = data as Credentials[];
        this.credentialsShown = data as Credentials[];
      },
      error => {
        console.log(error);
      }
    )
  }

  filterItems(arr: any, query: any): Credentials[] {
    // @ts-ignore
    return arr.filter(credentials => credentials.username.includes(query))
  };


  search(): void {
    this.credentialsShown = this.filterItems(this.credentials, this.searchName);
  }

  async activate(){
    for await(let credentials of this.selectedCredentials){
      this.authService.activate(credentials.username).subscribe();
    }
   this.reload();
  }

  deactivate(){
    for(let credentials of this.selectedCredentials){
      this.authService.deactivate(credentials.username).subscribe();
    }
    this.reload();
  }

  promote(){
    for(let credentials of this.selectedCredentials){
      this.authService.promote(credentials.username).subscribe();
    }
    this.reload();
  }

  reload(){
    setTimeout(function(){
      location.reload();
    },200);
  }
}
