import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string){
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() : string {
    return <string>sessionStorage.getItem(TOKEN_KEY);
  }

  public signOut(){
    sessionStorage.clear();
    window.location.reload();
  }

  public getUsername(): string {
    let jwtData = this.getToken().split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData['sub'];
  }

  public getRole(): string{
    let jwtData = this.getToken().split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData['role'];
  }

  public getId(): string{
    let jwtData = this.getToken().split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData['jti'];
  }
}
