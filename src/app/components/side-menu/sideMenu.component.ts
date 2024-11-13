import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink],
})
export class SideMenuComponent {
  @Output() isSideMenuOpen = new EventEmitter<boolean>();
  /**
   * Constructor
   */
  constructor() {}

  closePanel() {
    this.isSideMenuOpen.emit(false);
  }
}
