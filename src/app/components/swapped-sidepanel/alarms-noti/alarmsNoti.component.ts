import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'alarms-noti',
  templateUrl: './alarmsNoti.component.html',
  styleUrls: ['./alarmsNoti.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AlarmsNotiComponent {
  @Input() alarms: any[] = [];
}
