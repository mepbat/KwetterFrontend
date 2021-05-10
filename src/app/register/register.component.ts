import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {TokenStorageService} from '../shared/services/token-storage/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {Credentials} from '../shared/models/credentials';
import {TweetService} from '../shared/services/tweet/tweet.service';
import {role} from '../shared/models/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  hide: boolean = true;
  errorMessage: string = '';
  isRegisterFailed: boolean = false;
  credentials!: Credentials;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private route: ActivatedRoute, private appComp: AppComponent, private tweetService: TweetService) { }

  ngOnInit(): void{
    this.credentials = new Credentials(0,"", "", new role(0,""), true);
  }

  register(): void{
    this.authService.register(this.credentials).subscribe(
      data => {
        console.log(data);
        this.isRegisterFailed = false;
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
        this.isRegisterFailed = true;
        this.errorMessage = error.error;
      },
    )
  }

  navigateToLogin(): void{
    this.router.navigate(['login']);
  }

  navigateToHome(): void{
    this.router.navigate(['']);
  }
}
