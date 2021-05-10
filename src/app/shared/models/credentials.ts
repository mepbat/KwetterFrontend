import {role} from './role';

export class Credentials{
  id: number;
  username: string;
  password: string;
  role: role;
  active: boolean;

  constructor(id: number, username:string, password: string, role: role, active: boolean) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.active = active;
  }
}


