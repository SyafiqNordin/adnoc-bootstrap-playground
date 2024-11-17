import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-opportunities-listing',
  templateUrl: './static-opportunitiesListing.component.html',
  styleUrls: ['./static-opportunitiesListing.component.scss'],
  standalone: true,
  imports: [CommonModule, ],
})
export class StaticOpportunitiesListingComponent {
  @Input() opportunities: Array<{ well: string, expectedGain: number, percentageChange: string }> = [];
}


