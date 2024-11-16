import {
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SmartAlarmToggleService } from '../../services/smartAlarmToggle.service';
import { SwitchThemeService } from '../../services/switchTheme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class HeaderComponent implements OnInit {
  @Output() isSideMenuOpen = new EventEmitter<boolean>();

  currentTheme: string = '';
  /**
   * Constructor
   */
  constructor(
    private smartAlarmToggleService: SmartAlarmToggleService,
    private switchThemeService: SwitchThemeService
  ) {}

  ngOnInit() {
    this.getCurrentTheme();
  }

  getCurrentTheme() {
    this.currentTheme = this.switchThemeService.getTheme();
  }

  toggleSideMenu() {
    this.isSideMenuOpen.emit(true);
  }

  toggleSmartAlarmPanel() {
    this.smartAlarmToggleService.emitButtonClick();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.switchThemeService.setTheme(newTheme);
    this.getCurrentTheme(); // get the updated theme to change the theme button icon
  }
}
