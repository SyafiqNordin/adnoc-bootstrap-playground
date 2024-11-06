import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';
import { DummyData } from './dummyData';

@Component({
  selector: 'production-chart',
  templateUrl: './productionChart.component.html',
  styleUrls: ['./productionChart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, HighchartsChartModule],
})
export class ProductionChartComponent {
  chartConstructor: string = 'stockChart';
  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: '', // Set background color here
    },
    series: [
      {
        yAxis: 0,
        name: 'Oil Actual',
        type: 'line',
        data: DummyData.oilActual,
        color: '#09ff00',
        dashStyle: 'Solid',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
      {
        yAxis: 0,
        name: 'Oil target',
        type: 'line',
        data: DummyData.oilTarget,
        color: '#09ff00',
        dashStyle: 'Dash',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
      {
        yAxis: 1,
        name: 'Gas Actual',
        type: 'line',
        data: DummyData.gasActual,
        color: '#ff0000',
        dashStyle: 'Solid',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
      {
        yAxis: 1,
        name: 'Gas Target',
        type: 'line',
        data: DummyData.gasTarget,
        color: '#ff0000',
        dashStyle: 'Dash',
        pointInterval: 24 * 3600 * 1000, // 2 days in milliseconds
        pointStart: Date.UTC(2024, 0, 1),
      },
      {
        yAxis: 0,
        name: 'Water Actual',
        type: 'line',
        data: DummyData.waterActual,
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
    legend: {
      enabled: true,
      itemStyle: {
        color: 'rgba(129, 129, 129, 1)',
      },
      itemDistance: 17,
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
        },
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
