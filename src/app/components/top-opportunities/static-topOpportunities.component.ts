import { Input, Output, Component, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'static-top-opportunities',
  templateUrl: './static-topOpportunities.component.html',
  styleUrl: './static-topOpportunities.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
  ],
})
export class StaticTopOpportunitiesComponent {
  activePanel: string = 'one';
  @Input() hideAreaTable: boolean = true;
  @Output() toggleExpandContainer = new EventEmitter<void>();

  opportunities: any[] = [
    { well: 'MN001', expectedGain: 345.3, percentageChange: '+23.4%', beforeOptimize: 321.45 },
    { well: 'MN002', expectedGain: 290.1, percentageChange: '+18.2%', beforeOptimize: 321.45 },
    { well: 'MN003', expectedGain: 320.7, percentageChange: '+21.6%', beforeOptimize: 321.45 },
    { well: 'MN004', expectedGain: 310.4, percentageChange: '+20.8%', beforeOptimize: 321.45 },
    { well: 'MN005', expectedGain: 400.0, percentageChange: '+30.2%', beforeOptimize: 321.45 }
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
