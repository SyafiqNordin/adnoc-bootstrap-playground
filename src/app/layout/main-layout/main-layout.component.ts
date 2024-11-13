import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/sideMenu.component';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    HeaderComponent,
    SideMenuComponent,
    CommonModule,
  ],
})
export class MainLayoutComponent {
  isSideMenuOpen: boolean = false;

  /**
   * Constructor
   */
  constructor() {}

  openSideMenu() {
    this.isSideMenuOpen = true;
  }

  closeSideMenu() {
    this.isSideMenuOpen = false;
  }
}
