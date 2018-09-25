import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userChanged = new EventEmitter<User>();

  private user: User = new User(1, 'Dimitri', 'Suter', 'mail@dimitrisuter.ch');

  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

}
