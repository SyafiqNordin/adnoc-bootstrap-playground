import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { SVGIcon, moreVerticalIcon } from '@progress/kendo-svg-icons';
import { SearchInputComponent } from '../../search-input/search-input.component';

@Component({
  selector: 'static-alarms-noti',
  templateUrl: './static-alarmsNoti.component.html',
  styleUrls: ['./static-alarmsNoti.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
    SearchInputComponent,
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

  onSearch(value: string): void {
    console.log('Search value:', value);
    // Add your search logic here
  }
}
