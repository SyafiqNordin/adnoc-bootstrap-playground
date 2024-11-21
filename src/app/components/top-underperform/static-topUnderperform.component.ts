import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { KENDO_GRID } from '@progress/kendo-angular-grid';

@Component({
  selector: 'static-top-underperform',
  templateUrl: './static-topUnderperform.component.html',
  styleUrl: './static-topUnderperform.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    KENDO_LAYOUT,
    KENDO_BUTTON,
    KENDO_GRID,
  ],
})
export class StaticTopUnderperformComponent {
  underperforms: any[] = [
    { well: 'DY0001', actual: 290, potDeferment: '-9.3%', oilRate: 299.5 },
    { well: 'DY0002', actual: 218.3, potDeferment: '-5%', oilRate: 223 },
    { well: 'DY0003', actual: 192, potDeferment: '-19.2%', oilRate: 200.4 },
    { well: 'DY0004', actual: 310.4, potDeferment: '-7.8%', oilRate: 321.45 },
    { well: 'DY0005', actual: 190, potDeferment: '-19%', oilRate: 200.7 },
    { well: 'DY0006', actual: 190, potDeferment: '-19%', oilRate: 200.7 },
    { well: 'DY0007', actual: 190, potDeferment: '-19%', oilRate: 200.7 },
  ];

  public gridData: any[] = [...this.underperforms];
  public stripedRows = (args: any) => ({
    'striped-row': args.index % 2 === 0
  });
}
