import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_GRID } from '@progress/kendo-angular-grid';

@Component({
  selector: 'static-top-opportunities',
  templateUrl: './static-topOpportunities.component.html',
  styleUrl: './static-topOpportunities.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    KENDO_LAYOUT,
    KENDO_GRID,
  ],
})
export class StaticTopOpportunitiesComponent {
  opportunities: any[] = [
    { well: 'DY0001', beforeOptimize: 388, expGainVal: '49', expGainPercentage: '+12.6%', expOilGain: 321.45 },
    { well: 'DY0002', beforeOptimize: 381, expGainVal: '12', expGainPercentage: '+3.1%', expOilGain: 321.45 },
    { well: 'DY0003', beforeOptimize: 324, expGainVal: '43', expGainPercentage: '+13.3%', expOilGain: 321.45 },
    { well: 'DY0004', beforeOptimize: 291, expGainVal: '49', expGainPercentage: '+16.8%', expOilGain: 321.45 },
    { well: 'DY0005', beforeOptimize: 236, expGainVal: '41', expGainPercentage: '+17.4%', expOilGain: 321.45 },
    { well: 'DY0006', beforeOptimize: 254, expGainVal: '12', expGainPercentage: '+12%', expOilGain: 321.45 },
    { well: 'DY0007', beforeOptimize: 254, expGainVal: '12', expGainPercentage: '+12%', expOilGain: 321.45 },
  ];

  public gridData: any[] = [...this.opportunities];
  public stripedRows = (args: any) => ({
    'striped-row': args.index % 2 === 0
  });
}
