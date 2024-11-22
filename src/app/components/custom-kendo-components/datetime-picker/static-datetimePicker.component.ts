import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  KENDO_DATEINPUTS,
  PopupSettings,
} from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'static-datetime-picker',
  templateUrl: './static-dateTimePicker.component.html',
  styleUrls: ['./static-dateTimePicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, CommonModule, KENDO_DATEINPUTS],
})
export class StaticDateTimePickerComponent {
  public value!: Date;
  public format = 'dd-MM-yyyy HH:mm';
  public popupSettings: PopupSettings = {
    appendTo: 'component',
    popupClass: 'header-datepicker-popup',
  };
  /**
   * Constructor
   */
  constructor() {}
}
