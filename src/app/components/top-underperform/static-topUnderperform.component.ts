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
    { well: 'DY0001', potOilDeferment: 437, actual: 388, potDefermentPercentage: '-12.6%', potDefermentVal: 49 },
    { well: 'DY0002', potOilDeferment: 393, actual: 381, potDefermentPercentage: '-3.1%', potDefermentVal: 12 },
    { well: 'DY0003', potOilDeferment: 367, actual: 324, potDefermentPercentage: '-13.3%', potDefermentVal: 43 },
    { well: 'DY0004', potOilDeferment: 340, actual: 291, potDefermentPercentage: '-16.8%', potDefermentVal: 49 },
    { well: 'DY0005', potOilDeferment: 277, actual: 236, potDefermentPercentage: '-17.4%', potDefermentVal: 41 },
    { well: 'DY0006', potOilDeferment: 190, actual: 290, potDefermentPercentage: '-4.7%', potDefermentVal: 12 },
    { well: 'DY0007', potOilDeferment: 190, actual: 290, potDefermentPercentage: '-9%', potDefermentVal: 12 },
  ];

  public gridData: any[] = [...this.underperforms];
  public stripedRows = (args: any) => ({
    'striped-row': args.index % 2 === 0
  });
}
