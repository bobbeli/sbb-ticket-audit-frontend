import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class APIService {

  API: String = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }


  googleAuthUser(user: User) {
    return this.http.post(this.API + 'google/auth', user);
  }

  syncMailsOnServer(user: User) {
    return this.http.post(this.API + 'ticket/SyncWithmailServer', user);
  }

  getAllTickets(user: User) {
    return this.http.post(this.API + 'ticket/GetTickets', user);
  }


}
