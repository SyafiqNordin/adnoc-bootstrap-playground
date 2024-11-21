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
    { well: 'DY0001', actual: 345.3, expGain: '+23.4%', expOilGain: 321.45 },
    { well: 'DY0002', actual: 290.1, expGain: '+18.2%', expOilGain: 321.45 },
    { well: 'DY0003', actual: 320.7, expGain: '+21.6%', expOilGain: 321.45 },
    { well: 'DY0004', actual: 310.4, expGain: '+20.8%', expOilGain: 321.45 },
    { well: 'DY0005', actual: 400.0, expGain: '+30.2%', expOilGain: 321.45 },
    { well: 'DY0006', actual: 290.1, expGain: '+18.2%', expOilGain: 321.45 },
    { well: 'DY0007', actual: 290.1, expGain: '+18.2%', expOilGain: 321.45 },
    { well: 'DY0008', actual: 290.1, expGain: '+18.2%', expOilGain: 321.45 },
    { well: 'DY0009', actual: 290.1, expGain: '+18.2%', expOilGain: 321.45 },
    { well: 'DY00010', actual: 290.1, expGain: '+18.2%', expOilGain: 321.45 },
  ];

  public gridData: any[] = [...this.opportunities];
  public stripedRows = (args: any) => ({
    'striped-row': args.index % 2 === 0
  });
}
