import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticUnderperformOverviewComponent } from './overview-card/static-underperformOverview.component';
import { StaticUnderperformListingComponent } from './listing-card/static-underperformListing.component';

@Component({
  selector: 'static-top-underperform',
  templateUrl: './static-topUnderperform.component.html',
  styleUrl: './static-topUnderperform.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StaticUnderperformOverviewComponent,
    StaticUnderperformListingComponent,
  ],
})
export class StaticTopUnderperformComponent {
  activePanel: string = 'one';
  topUnderperforms: any[] = [
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
}
