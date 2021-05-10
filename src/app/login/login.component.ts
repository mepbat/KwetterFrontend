import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {TokenStorageService} from '../shared/services/token-storage/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {Credentials} from '../shared/models/credentials';
import {role} from '../shared/models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl!: string;

  username: string = "";
  hide: boolean = true;
  errorMessage: string = '';
  isLoginFailed: boolean = false;
  credentials!: Credentials;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private route: ActivatedRoute, private appComp: AppComponent) { }

  ngOnInit(): void {
    this.credentials = new Credentials(0,"", "", new role(0,""), true);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    this.authService.authenticate(this.credentials).subscribe(
      data => {
        console.log(data)
        this.isLoginFailed = false;
        this.tokenStorage.saveToken(data.token);
        if(this.returnUrl === ''){
          this.router.navigate(['home']);
        }
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
        this.errorMessage = error.error;
      },
    )
  }

  navigateToRegister(){
    this.router.navigate(['register']);
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

}
