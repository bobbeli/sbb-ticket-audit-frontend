import {Component, OnInit, ViewChild} from '@angular/core';
import {Ticket} from '../ticket.model';
import {MatSort, MatTableDataSource} from '@angular/material';

const tickets: Ticket[] = [
	new Ticket(1, Date.now(), 'SuperSave', 10 ),
	new Ticket(2, Date.now() + 1, 'Regular', 2.20 ),
	new Ticket(3, Date.now() + 2, 'SuperSaver', 18 )
];

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'date', 'price'];
    dataSource = new MatTableDataSource(tickets);

    @ViewChild(MatSort) sort: MatSort;

    constructor() { }

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
