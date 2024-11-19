import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'static-opportunities-listing',
  templateUrl: './static-opportunitiesListing.component.html',
  styleUrls: ['./static-opportunitiesListing.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_BUTTON,
  ],
})
export class StaticOpportunitiesListingComponent {
  @Input() opportunities: Array<{ well: string, expectedGain: number, percentageChange: string }> = [];
}


