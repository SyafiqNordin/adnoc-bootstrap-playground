import { Component } from "@angular/core";
import { ExpansionPanelComponent } from "@progress/kendo-angular-layout";

@Component({
    selector: 'test',
    templateUrl: './testExpansionPanel.component.html',
    styleUrls: ['./testExpansionPanel.component.scss'],
    standalone: true,
    imports: [
      ExpansionPanelComponent,
    ],
  })
export class testExpansionPanelComponent {}

// import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { CommonModule } from '@angular/common';
// import { StaticNoiseBackgroundCardComponent } from '../../components/noise-background-card/static-noiseBackgroundCard.component';

// @Component({
//   selector: 'test',
//   templateUrl: './testExpansionPanel.component.html',
//   styleUrls: ['./testExpansionPanel.component.scss'],
//   standalone: true,
//   imports: [
//     MatExpansionModule,
//     CommonModule,
//     StaticNoiseBackgroundCardComponent,
//   ],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class testExpansionPanelComponent {
//   readonly panelOpenState = signal(false);
// }
