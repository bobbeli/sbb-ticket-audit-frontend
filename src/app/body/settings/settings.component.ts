import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  user: User;

  constructor(private apiService: APIService, private userService: UserService) {}

  ngOnInit() {
  }

  onSubmit(event: FormControl) {
    // ToDo: Create Async request to server with email (event.value)
    console.log(event.value);
    this.user = this.userService.getUser();
    this.apiService.getAllTickets(this.user).subscribe(res => console.log('Res of Request', res));

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email ist zwingend' :
        this.email.hasError('email') ? 'WTF? Das ist keine Email.' :
            '';
  }


}
