import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductionChartComponent } from '../../components/production-chart/productionChart.component';
import { cardBlueComponent } from '../../components/card/cardBlue.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, ProductionChartComponent, cardBlueComponent],
})
export class DashboardComponent {
  /**
   * Constructor
   */
  constructor() {}
}
