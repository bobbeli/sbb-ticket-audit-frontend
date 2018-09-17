import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketListComponent } from './body/tickets/ticket-list/ticket-list.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './body/user/user.component';
import { TicketComponent } from './body/tickets/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './header/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    HeaderComponent,
    UserComponent,
    TicketComponent,
    BodyComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
