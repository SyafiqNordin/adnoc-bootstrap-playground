import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-ticket-noti',
  templateUrl: './smartTicketNoti.component.html',
  styleUrls: ['./smartTicketNoti.component.scss'],
  standalone: true,
  imports: [CommonModule, ],
})
export class SmartTicketNotiComponent {
  @Input() smartTickets: any[] = [];
}
