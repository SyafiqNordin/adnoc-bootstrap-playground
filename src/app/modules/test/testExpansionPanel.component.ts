import { Component } from "@angular/core";
import { ExpansionPanelModule, LayoutModule } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';
import { StaticExceptionsWellComponent } from '../../components/exceptions-well/static-exceptionsWell.component';

@Component({
    selector: 'test',
    templateUrl: './testExpansionPanel.component.html',
    styleUrls: ['./testExpansionPanel.component.scss'],
    standalone: true,
    imports: [
      ExpansionPanelModule,
      LayoutModule,
      CommonModule,
      StaticExceptionsWellComponent,
    ],
  })
export class testExpansionPanelComponent {
  isExpanded = true;

  onExpand(): void {
    this.isExpanded = true;
  }

  onCollapse(): void {
    this.isExpanded = false;
  }
}