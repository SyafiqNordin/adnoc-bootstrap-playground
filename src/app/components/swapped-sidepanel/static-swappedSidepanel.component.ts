import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticAlarmsNotiComponent } from './alarms-noti/static-alarmsNoti.component';
import { StaticSmartTicketNotiComponent } from './smart-ticket-noti/static-smartTicketNoti.component';

@Component({
  selector: 'static-swapped-sidepanel',
  templateUrl: './static-swappedSidepanel.component.html',
  styleUrl: './static-swappedSidepanel.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StaticAlarmsNotiComponent,
    StaticSmartTicketNotiComponent,
  ],
})
export class StaticSwappedSidepanelComponent {
  activePanel: string = 'one';
  smartTickets: any[] = [
    {
      title: 'MN190',
      sev_level: 'High',
      timestamp: '47 seconds ago',
      recommendation:
        'Consider increasing monitoring frequency for optimal performance.',
      assignable: true,
    },
    {
      title: 'XR210',
      sev_level: 'Medium',
      timestamp: '1 minute ago',
      recommendation:
        'Adjust pressure settings to enhance efficiency in this area.',
      assignable: false,
    },
    {
      title: 'HT455',
      sev_level: '',
      timestamp: '2 minute ago',
      recommendation:
        'Review temperature controls to ensure stable output levels.',
      assignable: false,
    },
  ];

  bringToFront(panel: string): void {
    this.activePanel = panel;
  }

  viewMore(ticket: any): void {
    console.log('View More:', ticket);
  }
}
