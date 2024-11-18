import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-underperform-listing',
  templateUrl: './static-underperformListing.component.html',
  styleUrls: ['./static-underperformListing.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StaticUnderperformListingComponent {
  @Input() underperform: Array<{ well: string, deferment: number, percentageChange: string }> = [];
}


