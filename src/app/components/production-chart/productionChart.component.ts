import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'production-chart',
  templateUrl: './productionChart.component.html',
  styleUrls: ['./productionChart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, HighchartsChartModule],
})
export class ProductionChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: '',
      align: 'left',
      style: {
        color: '#CECECE',
        fontWeight: 'normal',
        fontSize: '16px',
      },
    },
    xAxis: {
      type: 'datetime',
      lineColor: '',
      tickmarkPlacement: 'on',
      categories: [
        '01/01',
        '03/01',
        '05/01',
        '07/01',
        '09/01',
        '11/01',
        '13/01',
        '15/01',
        '17/01',
        '19/01',
      ],
      gridLineWidth: 0.1,
      gridLineColor: 'rgba(206, 206, 206, 0.7)',
      labels: {
        style: {
          color: 'rgba(206, 206, 206, 0.5)', // Set the color for x-axis labels here
          fontSize: '12px', // Optional: customize font size
        },
      },
    },
    yAxis: [
      {
        title: {
          text: 'stb/d',
          style: {
            color: 'rgba(129, 129, 129, 1)', // Set the color for x-axis labels here
            fontSize: '12px', // Optional: customize font size
          },
        },
        gridLineWidth: 0,
        type: 'logarithmic',
        labels: {
          x: 20,
          style: {
            color: 'rgba(206, 206, 206, 0.5)', // Set the color for x-axis labels here
            fontSize: '12px', // Optional: customize font size
          },
        },
      },
      {
        title: {
          text: 'MMscf/d',
          style: {
            color: 'rgba(129, 129, 129, 1)', // Set the color for x-axis labels here
            fontSize: '12px', // Optional: customize font size
          },
        },
        gridLineWidth: 0,
        type: 'logarithmic',
        labels: {
          x: -20,
          style: {
            color: 'rgba(206, 206, 206, 0.5)', // Set the color for x-axis labels here
            fontSize: '12px', // Optional: customize font size
          },
        },
        opposite: true,
      },
    ],
    series: [
      {
        yAxis: 0,
        name: 'Oil Actual',
        type: 'line',
        data: [
          38000, 30000, 28000, 40000, 39000, 45000, 31000, 30000, 42000, 39000,
        ],
        marker: {
          enabled: false, // Disable the markers (dots) on the line series
        },
        color: '#09ff00',
      },
      {
        yAxis: 0,
        name: 'Oil Target',
        type: 'line',
        data: [
          32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000, 32000,
        ],
        marker: {
          enabled: false, // Disable the markers (dots) on the line series
        },
        color: '#09ff00',
        dashStyle: 'Dash',
      },
      {
        yAxis: 1,
        name: 'Gas Actual',
        type: 'line',
        data: [2500, 2000, 2100, 2400, 2700, 2600, 2800, 2400, 2500, 2900],
        marker: {
          enabled: false, // Disable the markers (dots) on the line series
        },
        color: '#ff0000',
        dashStyle: 'Solid',
      },
      {
        yAxis: 1,
        name: 'Gas Target',
        type: 'line',
        data: [3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500],
        marker: {
          enabled: false, // Disable the markers (dots) on the line series
        },
        color: '#ff0000',
        dashStyle: 'Dash',
      },
      {
        yAxis: 0,
        name: 'Water Actual',
        type: 'line',
        data: [
          45000, 52000, 51000, 55000, 48000, 57000, 52000, 59000, 50000, 52000,
        ],
        marker: {
          enabled: false, // Disable the markers (dots) on the line series
        },
      },
    ],
    chart: {
      backgroundColor: '', // Set background color here
    },
    tooltip: {
      backgroundColor: 'rgba(4, 12, 25, 0.6)',
      borderColor: 'black',
      borderRadius: 6,
      style: {
        color: 'rgba(206, 206, 206, 1)',
      },
    },
    legend: {
      itemStyle: {
        color: 'rgba(129, 129, 129, 1)',
      },
    },
  };
  /**
   * Constructor
   */
  constructor() {}
}
