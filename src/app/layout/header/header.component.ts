import {
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { SmartAlarmToggleService } from '../../services/smartAlarmToggle.service';
import { SwitchThemeService } from '../../services/switchTheme.service';
import { StaticDateTimePickerComponent } from '../../components/custom-kendo-components/datetime-picker/static-datetimePicker.component';
import { StaticDropdownListComponent } from '../../components/custom-kendo-components/dropdown-list/static-dropdownList.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    KENDO_BUTTONS,
    StaticDateTimePickerComponent,
    StaticDropdownListComponent,
  ],
})
export class HeaderComponent implements OnInit {
  @Output() isSideMenuOpen = new EventEmitter<boolean>();

  currentTheme: string = '';
  public listCategories: Array<string> = ['Onshore', 'Offshore'];
  public listAssets: Array<string> = ['NEB', 'SE', 'Sarb/Umm Lulu'];
  public listFields: Array<string> = [
    'Dabbiya',
    'Rumaitha',
    'Shanayel',
    'Qusahwira',
    'Shah',
    'Mender',
    'Sarb',
    'Umm Lulu',
  ];
  public data: Array<string> = [];
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
