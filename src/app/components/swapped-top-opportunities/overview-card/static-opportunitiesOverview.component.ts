import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
@Component({
  selector: 'static-opportunities-overview',
  templateUrl: './static-opportunitiesOverview.component.html',
  styleUrls: ['./static-opportunitiesOverview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
  ],
})
export class StaticOpportunitiesOverviewComponent {
  @Input() opportunities: Array<{ well: string, expectedGain: number, percentageChange: string, beforeOptimize: number }> = [];
}
