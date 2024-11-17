import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticOpportunitiesOverviewComponent } from './overview-card/static-opportunitiesOverview.component';
import { StaticOpportunitiesListingComponent } from './listing-card/static-opportunitiesListing.component';

@Component({
  selector: 'static-top-opportunities',
  templateUrl: './static-topOpportunities.component.html',
  styleUrl: './static-topOpportunities.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StaticOpportunitiesOverviewComponent,
    StaticOpportunitiesListingComponent,
  ],
})
export class StaticTopOpportunitiesComponent {
  activePanel: string = 'one';
  topOpportunities: any[] = [
    { well: 'MN001', expectedGain: 345.3, percentageChange: '+23.4%' },
    { well: 'MN002', expectedGain: 290.1, percentageChange: '+18.2%' },
    { well: 'MN003', expectedGain: 320.7, percentageChange: '+21.6%' },
    { well: 'MN004', expectedGain: 310.4, percentageChange: '+20.8%' },
    { well: 'MN005', expectedGain: 400.0, percentageChange: '+30.2%' }
  ];

  bringToFront(panel: string): void {
    this.activePanel = panel;
  }

  optimizeItem(well: any): void {
    console.log('Selected item:', well);
  }
}
