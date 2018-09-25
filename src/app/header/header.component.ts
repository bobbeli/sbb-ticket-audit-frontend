import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatMenuTrigger } from '@angular/material';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appComponent: AppComponent;
  @Output() featureSelected = new EventEmitter<string>();

  constructor(appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSelectSetttings(feature: string) {
    console.log(feature)
    this.featureSelected.emit(feature);
  }


}
