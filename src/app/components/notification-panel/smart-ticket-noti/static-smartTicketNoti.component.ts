import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { SVGIcon, moreVerticalIcon } from '@progress/kendo-svg-icons';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'static-smart-ticket-noti',
  templateUrl: './static-smartTicketNoti.component.html',
  styleUrls: ['./static-smartTicketNoti.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_TEXTBOX,
    KENDO_LAYOUT,
    KENDO_BUTTON,
    MatExpansionModule,
  ],
})
export class StaticSmartTicketNotiComponent {
  @Input() smartTickets: any[] = [];
  public menuDots : SVGIcon  = moreVerticalIcon;

  viewMore(ticket: any): void {
    console.log('View More:', ticket);
  }

  assignTicket(ticket: any): void {
    console.log('Assign Ticket:', ticket);
  }

  onSmartTicketMenuClick() {
    console.log('Menu clicked');
  }

  onItemClick(ticket: any): void {
    console.log('Item selected:', ticket);
  }
}


