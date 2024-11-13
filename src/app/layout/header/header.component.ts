import { Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SmartAlarmToggleService } from '../../services/smart-alarm-toggle.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink],
})
export class HeaderComponent {
  @Output() isSideMenuOpen = new EventEmitter<boolean>();

  /**
   * Constructor
   */
  constructor(
    private smartAlarmToggleService: SmartAlarmToggleService
  ) {}

  toggleSideMenu() {
    this.isSideMenuOpen.emit(true);
  };

  toggleSmartAlarmPanel() {
    this.smartAlarmToggleService.emitButtonClick();
  }
}
