import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {Ticket} from '../../../models/ticket.model';
import { MatSort, MatTableDataSource, MatTable, MatPaginator} from '@angular/material';
import { TicketService } from '../../../services/ticket.service';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {

    tickets: Ticket[];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['position', 'name', 'price', 'actions'];
    dataSource: any = '';


    constructor(private ticketService: TicketService) {

     }

    ngOnInit() {
        // Subscribe to the ticket service and update data to tickets obj
        this.tickets = this.ticketService.getTickets();
        this.ticketService.ticketsChanged.subscribe(
            (updatedTickets: Ticket[]) => {
                console.log('updated table');

                this.tickets = updatedTickets;
                this.table.renderRows();
            }
        );

        this.dataSource = new MatTableDataSource(this.tickets);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

    }

    getTotalCost() {
        return this.tickets.map(t => t.Price).reduce(this.getSum);
    }

    getSum(total, num) {
        return total + num;
    }

    deleteItem(ticket: Ticket) {
        this.ticketService.removeTicket(ticket);
        console.log(ticket);

    }
}
