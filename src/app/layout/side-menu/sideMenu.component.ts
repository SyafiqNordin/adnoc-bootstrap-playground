import {
  Component,
  ViewEncapsulation,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class SideMenuComponent {
  @Input() translateValues: string = '0 0';
  @Output() close = new EventEmitter<void>();

  /**
   * Constructor
   */
  constructor() {}

  closePanel() {
    this.close.emit();
  }
}
