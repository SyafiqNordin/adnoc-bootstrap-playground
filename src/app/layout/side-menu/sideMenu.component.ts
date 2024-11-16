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

  pageList: { name: string; icon: string }[] = [
    {
      name: 'Field Performance',
      icon: 'assets/icons/field-performance.svg',
    },
    {
      name: 'Smart Surveillance',
      icon: 'assets/icons/smart-surveillance.svg',
    },
    {
      name: 'Well Test',
      icon: 'assets/icons/well-test.svg',
    },
    {
      name: 'Production Allocation',
      icon: 'assets/icons/production-allocation.svg',
    },
    {
      name: 'Well Performance',
      icon: 'assets/icons/well-performance.svg',
    },
    {
      name: 'Network Performance',
      icon: 'assets/icons/network-performance.svg',
    },
    {
      name: 'Voidage Replacement Ratio',
      icon: 'assets/icons/voidage-replacement-ratio.svg',
    },
    {
      name: 'Production Optimization',
      icon: 'assets/icons/production-optimization.svg',
    },
    {
      name: 'Modal Management',
      icon: 'assets/icons/model-management.svg',
    },
    {
      name: 'Ticketing/Oppurtunity',
      icon: 'assets/icons/ticketing-oppurtunity.svg',
    },
  ];

  /**
   * Constructor
   */
  constructor() {}

  closePanel() {
    this.close.emit();
  }
}
