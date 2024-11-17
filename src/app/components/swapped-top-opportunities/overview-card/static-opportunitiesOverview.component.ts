import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-opportunities-overview',
  templateUrl: './static-opportunitiesOverview.component.html',
  styleUrls: ['./static-opportunitiesOverview.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StaticOpportunitiesOverviewComponent {
  @Input() opportunities: Array<{ well: string, expectedGain: number, percentageChange: string }> = [];
}
