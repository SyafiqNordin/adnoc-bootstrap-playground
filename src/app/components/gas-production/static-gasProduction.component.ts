import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { HighchartsChartModule } from 'highcharts-angular';
import * as gaugeHighcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(gaugeHighcharts);
SolidGauge(gaugeHighcharts);

import * as stockHighcharts from 'highcharts/highstock';
import { DummyData } from './dummyData';

@Component({
  selector: 'static-gas-production',
  templateUrl: './static-gasProduction.component.html',
  styleUrls: ['./static-gasProduction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, HighchartsChartModule, CommonModule, LottieComponent],
})
export class StaticGasProductionComponent {
  @Output() toggleExpandContainer = new EventEmitter<void>();

  hideAreaChart: boolean = false;

  options: AnimationOptions = {
    path: 'assets/animations/red-arrow.json',
  };
  
  gaugeChartConstructor: string = 'chart';
  stockChartConstructor: string = 'stockChart';
  gaugeHighcharts: typeof gaugeHighcharts = gaugeHighcharts;
  stockHighcharts: typeof stockHighcharts = stockHighcharts;

  gaugeChartOptions: gaugeHighcharts.Options = {
    chart: {
      backgroundColor: '',
      type: 'solidgauge',
      margin: [0, 0, 0, 0],
    },
    title: {
      text: '',
    },
    tooltip: {
        enabled: false
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          outerRadius: '100%',
          innerRadius: '60%',
          backgroundColor: 'rgba(84, 86, 90, 0.30)',
          borderWidth: 0,
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
      },
    },
    series: [
      {
        name: 'Target',
        type: 'solidgauge',
        data: [
          {
            radius: '90%',
            innerRadius: '70%',
            y: 80,
            color: 'rgba(255, 0, 0, 0.5',
          },
        ],
      },
      {
        name: 'Actual',
        type: 'solidgauge',
        data: [
          {
            radius: '90%',
            innerRadius: '70%',
            y: 60,
            color: '#FF0000',
          },
        ],
      },
    ],
  };

  stockChartOptions: stockHighcharts.Options = {
    chart: {
      backgroundColor: '#54565a33', // Set background color here
      marginBottom: 0,
      margin: [0, 0, 0, 0],
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
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  };
}
