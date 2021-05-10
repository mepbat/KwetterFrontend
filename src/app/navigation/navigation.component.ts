import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {TokenStorageService} from '../shared/services/token-storage/token-storage.service';
import {Router} from '@angular/router';
import {AccountService} from '../shared/services/account/account.service';
import {TweetService} from '../shared/services/tweet/tweet.service';
import {Account} from '../shared/models/account';
import {Tag} from '../shared/models/tag';
import {TagService} from '../shared/services/tag/tag.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string = "Not Logged in";
  loggedIn: boolean = false;
  role: string = ''
  searchAccounts = [] as Account[]
  searchTags = [] as Tag[]
  searchInput: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private accountService: AccountService, private tagService: TagService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken() !== null){
        this.loggedIn = true;
        this.username = this.tokenStorage.getUsername()
        this.role = this.tokenStorage.getRole()
    }
  }

  signOut(): void{
    this.tokenStorage.signOut()
    this.router.navigate([''])
  }

  navigateToLogin(): void{
    this.router.navigate(['login'])
  }

  navigateToProfile(): void{
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['profile', this.tokenStorage.getUsername()]))
  }

  navigateToUser(username: string): void{
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['profile', username]))
  }

  search(searchInput: any){
    // If keypress is Enter
    if(searchInput.keyCode === 13) {
      this.searchClick(searchInput);
    }
    searchInput = searchInput.target.value;
    if(searchInput.length < 3)  return;
    if(searchInput.charAt(0) === '@' || searchInput.charAt(0) === '#') searchInput = searchInput.substring(1);
    this.accountService.searchAccounts(searchInput).subscribe(
      data => {
        this.searchAccounts = data as Account[];
      },
      error => {
        console.log(error);
      }
    )
    this.tagService.searchTags(searchInput).subscribe(
      data => {
        this.searchTags = data as Tag[];
      },
      error => {
        console.log(error);
      }
    )
  }

  searchClick(event: any){
    console.log("searchclick");
    if(event.target !== undefined){
      event = event.target.value;
    }
    if(event.toString().charAt(0) == '@'){
      event = event.substring(1);
      return this.navigateToUser(event);
    }
    else if(event.toString().charAt(0) == '#'){
      event = event.substring(1);
      return this.navigateToTag(event);
    }
    else this.navigateToTag(event);
  }

  navigateToTag(tag: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['tag', tag]))
  }

  navigateToAdmin(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['admin']))
  }
}
