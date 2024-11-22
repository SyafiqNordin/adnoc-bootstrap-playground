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
import {
  KENDO_DATEINPUTS,
  PopupSettings,
} from '@progress/kendo-angular-dateinputs';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { SmartAlarmToggleService } from '../../services/smartAlarmToggle.service';
import { SwitchThemeService } from '../../services/switchTheme.service';
import { StaticDateTimePickerComponent } from '../../components/custom-kendo-components/datetime-picker/static-datetimePicker.component';
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
    KENDO_DATEINPUTS,
    KENDO_DROPDOWNS,
    StaticDateTimePickerComponent,
  ],
})
export class HeaderComponent implements OnInit {
  @Output() isSideMenuOpen = new EventEmitter<boolean>();

  currentTheme: string = '';
  public value!: Date;
  public format = 'dd-MM-yyyy HH:mm';
  public popupSettings: PopupSettings = {
    appendTo: 'component',
    popupClass: 'header-datepicker-popup',
  };
  public listCategories: Array<string> = ['Onshore', 'Offshore'];
  public listAssets: Array<string> = ['NEB', 'SE', 'Sarb/Umm Lulu'];
  public listFields: Array<string> = ['Dabbiya', 'Rumaitha', 'Shanayel', 'Qusahwira', 'Shah', 'Mender', 'Sarb', 'Umm Lulu'];
  public data: Array<string> = [];
  /**
   * Constructor
   */
  constructor(
    private smartAlarmToggleService: SmartAlarmToggleService,
    private switchThemeService: SwitchThemeService
  ) 
  {
    this.data = this.listFields.slice();
  }

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

  handleFilter(value: string) {
    console.log(value);
    this.data = this.listFields.filter(
      (s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    console.log(this.data);
  }
}
