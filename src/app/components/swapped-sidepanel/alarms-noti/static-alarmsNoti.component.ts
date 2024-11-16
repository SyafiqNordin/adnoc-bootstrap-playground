import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-alarms-noti',
  templateUrl: './static-alarmsNoti.component.html',
  styleUrls: ['./static-alarmsNoti.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StaticAlarmsNotiComponent {
  @Input() alarms: any[] = [];
}
