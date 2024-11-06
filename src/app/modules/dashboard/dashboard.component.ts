import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductionChartComponent } from '../../components/production-chart/productionChart.component';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [RouterLink, ProductionChartComponent],
})
export class DashboardComponent {
    /**
     * Constructor
     */
    constructor() {}
}
