import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';
import { DummyData } from './dummyData';

@Component({
  selector: 'oil-production',
  templateUrl: './oilProduction.component.html',
  styleUrls: ['./oilProduction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, HighchartsChartModule],
})
export class OilProductionComponent {
  chartConstructor: string = 'stockChart';
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: '', // Set background color here
    },
    series: [
      {
        yAxis: 0,
        name: 'Actual',
        type: 'area',
        fillOpacity: 0.3,
        lineColor: 'rgba(0, 218, 105, 1)',
        data: DummyData.oilActual,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, 'rgba(0, 218, 105, 1)'], // start
            [0.5, 'rgba(0, 218, 105, 0.5)'], // middle
            [1, 'rgba(0, 218, 105, 0))'], // end
          ],
        },
        dashStyle: 'Solid',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
        showInNavigator: true,
      },
      {
        yAxis: 0,
        name: 'Target',
        type: 'line',
        data: DummyData.oilTarget,
        color: '#ff0000',
        dashStyle: 'Dash',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
      {
        yAxis: 1,
        name: 'Potential',
        type: 'line',
        data: DummyData.gasTarget,
        color: '#ffffff',
        dashStyle: 'Dash',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
    ],
    xAxis: {
      range: 18 * 24 * 3600 * 1000, // 18 days
      type: 'datetime',
      lineColor: '',
      gridLineWidth: 0.5,
      gridLineColor: 'rgba(206, 206, 206, 0.7)',
      tickColor: '',
      offset: -20,
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
        gridLineColor: '',
        labels: {
          reserveSpace: true,
          style: {
            color: 'rgba(206, 206, 206, 0.5)',
            fontSize: '12px',
          },
        },
        offset: 30,
        title: {
          text: 'stb/d',
          style: {
            color: 'rgba(129, 129, 129, 1)', // Set the color for x-axis labels here
            fontSize: '12px', // Optional: customize font size
          },
        },
        softMin: 0,
      },
      {
        gridLineColor: '',
        labels: {
          reserveSpace: true,
          style: {
            color: 'rgba(206, 206, 206, 0.5)',
            fontSize: '12px',
          },
        },
        offset: 30,
        title: {
          text: 'MMscf/d',
          style: {
            color: 'rgba(129, 129, 129, 1)', // Set the color for x-axis labels here
            fontSize: '12px', // Optional: customize font size
          },
        },
        softMin: 0,
      },
    ],
    tooltip: {
      backgroundColor: 'rgba(4, 12, 25, 0.6)',
      borderColor: 'black',
      borderRadius: 6,
      style: {
        color: 'rgba(206, 206, 206, 1)',
      },
    },
    
    navigator: {
      handles: {
        backgroundColor: '#CECECE',
        borderColor: '#CECECE',
        borderRadius: 2,
        height: 17,
        width: 6,
      },
      height: 61,
      margin: 20,
      maskFill: 'rgba(206, 206, 206, 0.5)',
      outlineWidth: 0,
      series: {
        fillOpacity: 0,
      },
      xAxis: {
        gridLineColor: '',
        labels: {
          style: {
            color: 'rgba(206, 206, 206, 1)',
            fontSize: '12px',
          },
          formatter: function () {
            return Highcharts.dateFormat('%b', Number(this.value))[0]; // Show first letter of month
          },
        },
        dateTimeLabelFormats: {
            month: '%b'
        },
        tickInterval: 31 * 24 * 3600 * 1000,
      },
    },
    rangeSelector: {
      buttonPosition: {
        x: -75,
      },
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
}
