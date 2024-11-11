import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, HighchartsChartModule],
})
export class PieChartComponent implements OnInit {
  private gaugeChart: any;
  private lineChart: any;

  // Sample data that could come from a service
  public chartData = {
    currentProduction: 3415,
    targetProduction: 3500,
    potentialProduction: 4150,
    productionData: [
      { date: '1/1', actual: 3200, target: 3500, potential: 4000 },
      { date: '3/1', actual: 3300, target: 3500, potential: 4000 },
      { date: '5/1', actual: 3100, target: 3500, potential: 4000 },
      { date: '7/1', actual: 3600, target: 3500, potential: 4000 },
      { date: '9/1', actual: 3400, target: 3500, potential: 4000 },
      { date: '11/1', actual: 3500, target: 3500, potential: 4000 },
      { date: '13/1', actual: 3415, target: 3500, potential: 4150 },
      { date: '15/1', actual: 3415, target: 3500, potential: 4150 },
    ],
  };

  ngOnInit() {
    this.initializeGaugeChart();
    this.initializeLineChart();
  }

  private initializeGaugeChart() {
    const gaugeOptions: Highcharts.Options = {
      chart: {
        type: 'solidgauge',
        backgroundColor: '#1a1a2e',
      },
      title: {
        text: 'Gas Production',
        style: { color: '#ffffff' },
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [
          {
            backgroundColor: '#404040',
            borderWidth: 0,
            outerRadius: '100%',
            innerRadius: '60%',
          },
        ],
      },
      yAxis: {
        min: 0,
        max: 5000,
        lineWidth: 0,
        tickPositions: [],
        stops: [
          [0.1, '#FF4136'],
          [0.5, '#FF851B'],
          [0.9, '#2ECC40'],
        ],
      },
      series: [
        {
          type: 'solidgauge',
          name: 'Production',
          data: [
            {
              y: this.chartData.currentProduction,
              colorIndex: 1,
            },
          ],
          dataLabels: {
            format: '{y} MMscf/d',
          },
          tooltip: {
            valueSuffix: ' MMscf/d',
          },
        },
      ],
      credits: {
        enabled: false,
      },
    };

    this.gaugeChart = Highcharts.chart('gauge-container', gaugeOptions);
  }

  private initializeLineChart() {
    const lineOptions: Highcharts.Options = {
      chart: {
        type: 'line',
        backgroundColor: '#1a1a2e',
      },
      title: {
        text: 'Production Trends',
        style: { color: '#ffffff' },
      },
      xAxis: {
        categories: this.chartData.productionData.map((data) => data.date),
        labels: {
          style: { color: '#ffffff' },
        },
      },
      yAxis: {
        title: {
          text: 'MMscf/d',
          style: { color: '#ffffff' },
        },
        labels: {
          style: { color: '#ffffff' },
        },
        gridLineColor: '#404040',
      },
      series: [
        {
          type: 'line',
          name: 'Actual',
          data: this.chartData.productionData.map((data) => data.actual),
          color: '#2ECC40',
        },
        {
          type: 'line',
          name: 'Target',
          data: this.chartData.productionData.map((data) => data.target),
          color: '#FF4136',
        },
        {
          type: 'line',
          name: 'Potential',
          data: this.chartData.productionData.map((data) => data.potential),
          color: '#7FDBFF',
        },
      ],
      legend: {
        itemStyle: {
          color: '#ffffff',
        },
      },
      credits: {
        enabled: false,
      },
    };

    this.lineChart = Highcharts.chart('line-container', lineOptions);
  }
}
