import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { ResponseTicket } from '../interfaces/ticket.interface';

@Injectable({
  providedIn: 'root',
})
export class APIService {

  API: String = 'https://localhost:5001/api/';

  httpHeaders: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Content-Type': ['application/json']
  });

  constructor(private http: HttpClient) { }


  googleAuthUser(user: User) {
    return this.http.post(this.API + 'google/auth', user, {headers: this.httpHeaders});
  }

  syncMailsOnServer(user: User) {
    return this.http.post(this.API + 'ticket/SyncWithmailServer', user, {headers: this.httpHeaders});
  }

  getAllTickets(user: User): Observable<Object> {
    user._id = null;
    return this.http.post(this.API + 'ticket/GetTickets', user, {headers: this.httpHeaders});
  }

  getAllTicket() {
    return this.http.get(this.API + 'ticket/GetTicket', {headers: this.httpHeaders});
  }

}
