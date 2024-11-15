import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-smart-ticket-noti',
  templateUrl: './static-smartTicketNoti.component.html',
  styleUrls: ['./static-smartTicketNoti.component.scss'],
  standalone: true,
  imports: [CommonModule, ],
})
export class StaticSmartTicketNotiComponent {
  @Input() smartTickets: any[] = [];

  viewMore(ticket: any): void {
    console.log('View More:', ticket);
  }

  assignTicket(ticket: any): void {
    console.log('Assign Ticket:', ticket);
  }
}


