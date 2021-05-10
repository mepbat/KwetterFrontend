import {Follow} from './follow';

export class Account{
  id: number;
  active: boolean;
  username: string;
  bio: string;
  location: string;
  photo: string;
  web: string;
  following: Follow[];
  followers: Follow[];

  constructor(id: number, active: boolean, username: string, bio: string, location: string, photo: string, web: string, following: Follow[], followers: Follow[]) {
    this.id = id;
    this.active = active;
    this.username = username;
    this.bio = bio;
    this.location = location;
    this.photo = photo;
    this.web = web;
    this.following = following;
    this.followers = followers;
  }
}

