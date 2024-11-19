import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'static-underperform-overview',
  templateUrl: './static-underperformOverview.component.html',
  styleUrls: ['./static-underperformOverview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
  ],
})
export class StaticUnderperformOverviewComponent {
  @Input() underperform: Array<{ well: string, deferment: number, percentageChange: string, actual: number }> = [];
}
