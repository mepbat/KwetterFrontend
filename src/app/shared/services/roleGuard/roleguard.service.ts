import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenStorageService} from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate{

  constructor(
    private router: Router, private tokenStorage: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenStorage.getToken() !== null) {
      let role = this.tokenStorage.getRole()
      if (role !== 'admin') {
        this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
        return false;
      }
    }
    return true;
  }
}
