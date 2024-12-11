import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'static-producer-well',
  templateUrl: './static-producerWell.component.html',
  styleUrls: ['./static-producerWell.component.scss'],
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
})
export class StaticProducerWellComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 70,
      marginRight: 0,
      marginLeft: -10,
      marginTop: 0,
      marginBottom: 20,
    },
    title: {
      text: '',
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function () {
          const date = new Date(this.value as number); // `this.value` is the timestamp
          const day = date.getDate();
          const month = date.getMonth() + 1;
          return `${day}/${month}`;
        },
        distance: 5,
        style: {
          color: 'rgba(206, 206, 206, 0.50)',
          fontSize: '0.625rem',
        },
      },
      lineColor: 'transparent',
      tickInterval: 24 * 3600 * 1000, // 1 day in milliseconds
      tickColor: 'transparent',
    },
    yAxis: {
      visible: false,
    },
    plotOptions: {
      column: {
        borderColor: 'transparent',
        borderRadius: 50,
        maxPointWidth: 4,
        groupPadding: 0.3,
      },
    },
    series: [
      {
        type: 'column',
        name: 'Active',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, 'rgba(0, 218, 105, 1)'], // start
            [0.5, 'rgba(0, 218, 105, 0.5)'], // middle
            [1, 'rgba(0, 218, 105, 0.2)'], // end
          ],
        },
        data: [
          [Date.UTC(2024, 0, 16), 8],
          [Date.UTC(2024, 0, 17), 8],
          [Date.UTC(2024, 0, 18), 7],
          [Date.UTC(2024, 0, 19), 8],
          [Date.UTC(2024, 0, 20), 9],
          [Date.UTC(2024, 0, 21), 7],
        ],
      },
      {
        type: 'column',
        name: 'Inactive',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 0, 0, 1)'], // start
            [0.5, 'rgba(255, 0, 0, 0.5)'], // middle
            [1, 'rgba(255, 0, 0, 0.2))'], // end
          ],
        },
        data: [
          [Date.UTC(2024, 0, 16), 6],
          [Date.UTC(2024, 0, 17), 6],
          [Date.UTC(2024, 0, 18), 4],
          [Date.UTC(2024, 0, 19), 3],
          [Date.UTC(2024, 0, 20), 2],
          [Date.UTC(2024, 0, 21), 4],
        ],
      },
    ],
  };
}
