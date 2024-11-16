import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as donutHighcharts from 'highcharts';
import * as stockHighcharts from 'highcharts/highstock';
import { DummyData } from './dummyData';

@Component({
  selector: 'static-gas-production',
  templateUrl: './static-gasProduction.component.html',
  styleUrls: ['./static-gasProduction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, HighchartsChartModule, CommonModule],
})
export class StaticGasProductionComponent {
  @Output() toggleExpandContainer = new EventEmitter<void>();

  hideAreaChart: boolean = false;
  donutChartConstructor: string = 'chart';
  stockChartConstructor: string = 'stockChart';
  donutHighcharts: typeof donutHighcharts = donutHighcharts;
  stockHighcharts: typeof stockHighcharts = stockHighcharts;

  donutChartOptions: donutHighcharts.Options = {
    chart: {
      backgroundColor: '',
      type: 'pie',
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        innerSize: '60%', // Creates the "donut" shape by adding a hollow center
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
        },
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Share',
        data: [
          { name: 'Category A', y: 40 },
          { name: 'Category B', y: 30 },
          { name: 'Category C', y: 20 },
          { name: 'Category D', y: 10 },
        ],
      },
    ],
  };

  stockChartOptions: stockHighcharts.Options = {
    chart: {
      backgroundColor: '#54565a33', // Set background color here
      marginBottom: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
    },
    series: [
      {
        name: 'Actual',
        type: 'area',
        fillOpacity: 0.3,
        lineColor: 'rgba(255, 0, 0, 1)',
        data: DummyData.actual,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 0, 0, 1)'], // start
            [0.5, 'rgba(255, 0, 0, 0.5)'], // middle
            [1, 'rgba(255, 0, 0, 0))'], // end
          ],
        },
        dashStyle: 'Solid',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
        showInNavigator: true,
      },
      {
        name: 'Target',
        type: 'line',
        data: DummyData.target,
        color: '#ff0000',
        dashStyle: 'Dash',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
      {
        name: 'Potential',
        type: 'line',
        data: DummyData.potential,
        color: '#ffffff',
        dashStyle: 'Dash',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
    ],
    xAxis: {
      range: 12 * 24 * 3600 * 1000, // 12 days
      type: 'datetime',
      lineColor: '',
      gridLineWidth: 0.5,
      gridLineColor: 'rgba(206, 206, 206, 0.7)',
      tickColor: '',
      offset: -40,
      minTickInterval: 2 * 24 * 3600 * 1000, //2 days
      labels: {
        style: {
          color: 'rgba(206, 206, 206, 0.5)', // Set the color for x-axis labels here
          fontSize: '12px', // Optional: customize font size
        },
      },
      dateTimeLabelFormats: {
        day: '%d/%m',
      },
    },
    yAxis: [
      {
        opposite: false,
        gridLineColor: 'rgba(206, 206, 206, 0.4)',
        labels: {
          enabled: false,
        },
        min: 2500,
      },
    ],
    scrollbar: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: 'rgba(4, 12, 25, 0.6)',
      borderColor: 'black',
      borderRadius: 6,
      style: {
        color: 'rgba(206, 206, 206, 1)',
      },
      shared: true,
    },
    navigator: {
      enabled: false,
    },
    rangeSelector: {
      buttonPosition: {
        x: -10,
        y: 10,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'D',
          title: 'View 1 day',
        },
        {
          type: 'month',
          count: 1,
          text: 'M',
          title: 'View 1 month',
        },
      ],
      buttonSpacing: 8,
      buttonTheme: {
        fill: 'none',
        style: {
          color: 'rgba(129, 129, 129, 1)',
          fontSize: '12px',
        },
        states: {
          hover: {
            fill: 'rgba(65, 65, 65, 1)',
            style: {
              color: 'rgba(206, 206, 206, 1)',
            },
          },
          select: {
            fill: 'rgba(65, 65, 65, 1)',
            style: {
              color: 'rgba(206, 206, 206, 1)',
            },
          },
        },
      },
      inputEnabled: false,
      labelStyle: {
        display: 'none',
      },
    },
  };
  /**
   * Constructor
   */
  constructor() {}

  toggleExpand() {
    this.hideAreaChart = !this.hideAreaChart;
    this.toggleExpandContainer.emit();
  }
}
