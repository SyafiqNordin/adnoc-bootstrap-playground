import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { SVGIcon, moreVerticalIcon } from '@progress/kendo-svg-icons';
import { SearchInputComponent } from '../../search-input/search-input.component';
 
@Component({
  selector: 'static-smart-ticket-noti',
  templateUrl: './static-smartTicketNoti.component.html',
  styleUrls: ['./static-smartTicketNoti.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
    SearchInputComponent,
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

  onSearch(value: string): void {
    console.log('Search value:', value);
    // Add your search logic here
  }
  
}


