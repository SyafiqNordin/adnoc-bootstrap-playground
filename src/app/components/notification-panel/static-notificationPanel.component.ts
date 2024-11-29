import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule  } from "@progress/kendo-angular-layout";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { StaticAlarmsNotiComponent } from './alarms-noti/static-alarmsNoti.component';
import { StaticSmartTicketNotiComponent } from './smart-ticket-noti/static-smartTicketNoti.component';

@Component({
  selector: 'static-notification-panel',
  templateUrl: './static-notificationPanel.component.html',
  styleUrl: './static-notificationPanel.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    StaticAlarmsNotiComponent,
    StaticSmartTicketNotiComponent
  ],
})
export class StaticNotificationPanelComponent {
  smartTickets: any[] = [
    {
      title: 'MN190',
      sev_level: 'High',
      timestamp: '47 seconds ago',
      recommendation:
        'Consider increasing monitoring frequency for optimal performance. Recommendation text here',
      assignable: true,
      alarmDesc: 'Downthrust alarm. Too low liquid rate.',
      assignedTo: 'John Doe',
      issuedDate: '20-01-2024',
      updatedDate: '20-05-2024',

    },
    {
      title: 'XR210',
      sev_level: 'Medium',
      timestamp: '1 minute ago',
      recommendation:
        'Adjust pressure settings to enhance efficiency in this area. Recommendation text here',
      assignable: false,
      alarmDesc: 'ESP vibration is violating limit.',
      assignedTo: 'John Doe',
      issuedDate: '19-01-2024',
      updatedDate: '19-05-2024',
    },
    {
      title: 'HT455',
      sev_level: '',
      timestamp: '2 minute ago',
      recommendation:
        'Review temperature controls to ensure stable output levels. Recommendation text here',
      assignable: false,
      alarmDesc: 'ESP upthrust alarm. Too high liquid rate.',
      assignedTo: 'John Doe',
      issuedDate: '18-01-2024',
      updatedDate: '18-05-2024',
    },
  ];

  viewMore(ticket: any): void {
    console.log('View More:', ticket);
  }
}
