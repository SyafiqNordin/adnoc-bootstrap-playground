import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { SVGIcon, moreVerticalIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'static-alarms-noti',
  templateUrl: './static-alarmsNoti.component.html',
  styleUrls: ['./static-alarmsNoti.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_TEXTBOX,
    KENDO_LAYOUT,
    KENDO_BUTTON,
  ],
})
export class StaticAlarmsNotiComponent {
  @Input() alarms: any[] = [];
  public menuDots : SVGIcon  = moreVerticalIcon;

  onAlarmsMenuClick() {
    console.log('Menu clicked');
  }

  onItemClick(ticket: any): void {
    console.log('Item selected:', ticket);
  }
}
