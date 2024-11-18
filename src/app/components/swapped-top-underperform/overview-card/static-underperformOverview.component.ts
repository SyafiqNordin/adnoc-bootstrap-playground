import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-underperform-overview',
  templateUrl: './static-underperformOverview.component.html',
  styleUrls: ['./static-underperformOverview.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StaticUnderperformOverviewComponent {
  @Input() underperform: Array<{ well: string, deferment: number, percentageChange: string, actual: number }> = [];
}
