import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


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

  ngOnInit() {
  }

  onSubmit(event: FormControl) {
    // ToDo: Create Async request to server with email (event.value)
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email ist zwingend' :
        this.email.hasError('email') ? 'WTF? Das ist keine Email.' :
            '';
  }


}
