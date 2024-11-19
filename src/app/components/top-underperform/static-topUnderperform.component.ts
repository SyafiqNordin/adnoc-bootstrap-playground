import { Input, Output, Component, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'static-top-underperform',
  templateUrl: './static-topUnderperform.component.html',
  styleUrl: './static-topUnderperform.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
  ],
})
export class StaticTopUnderperformComponent {
  activePanel: string = 'one';
  @Input() hideAreaTable: boolean = true;
  @Output() toggleExpandContainer = new EventEmitter<void>();

  underperforms: any[] = [
    { well: 'MN001', deferment: 290, percentageChange: '-9.3%', actual: 299.5 },
    { well: 'MN002', deferment: 218.3, percentageChange: '-5%', actual: 223 },
    { well: 'MN003', deferment: 192, percentageChange: '-19.2%', actual: 200.4 },
    { well: 'MN004', deferment: 310.4, percentageChange: '-7.8%', actual: 321.45 },
    { well: 'MN005', deferment: 190, percentageChange: '-19%', actual: 200.7 },
  ];

  bringToFront(panel: string): void {
    this.activePanel = panel;
  }

  optimizeItem(well: any): void {
    console.log('Selected item:', well);
  }

  toggleExpand() {
    this.hideAreaTable = !this.hideAreaTable;
    this.toggleExpandContainer.emit();
  };
}
