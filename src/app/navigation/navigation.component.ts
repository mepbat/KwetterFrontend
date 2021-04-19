import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {TokenStorageService} from '../shared/services/token-storage/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string = "Not Logged in";
  loggedIn: boolean = false;
  role: string = ''

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

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
}
