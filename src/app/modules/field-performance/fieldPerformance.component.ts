import { Component, ViewEncapsulation, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from "@progress/kendo-angular-layout";
import { MatExpansionModule } from '@angular/material/expansion';
import { StaticProductionChartComponent } from '../../components/production-chart/static-productionChart.component';
import { StaticOilProductionComponent } from '../../components/oil-production/static-oilProduction.component';
import { StaticFieldNetworkComponent } from '../../components/field-network/static-fieldNetwork.component';
import { StaticGasProductionSummaryComponent } from '../../components/gas-production-summary/static-gasProductionSummary.component';
import { StaticOilProductionSummaryComponent } from '../../components/oil-production-summary/static-oilProductionSummary.component';
import { SmartAlarmToggleService } from '../../services/smartAlarmToggle.service';
import { StaticNotificationPanelComponent } from '../../components/notification-panel/static-notificationPanel.component';
import { StaticTopOpportunitiesComponent } from '../../components/top-opportunities/static-topOpportunities.component';
import { StaticProducerWellComponent } from '../../components/producer-well/static-producerWell.component';
import { StaticTopUnderperformComponent } from '../../components/top-underperform/static-topUnderperform.component';
import { StaticGasInjectionComponent } from '../../components/gas-injection/static-gasInjection.component';
import { StaticNoiseBackgroundCardComponent } from '../../components/noise-background-card/static-noiseBackgroundCard.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'field-performance',
  templateUrl: './fieldPerformance.component.html',
  styleUrls: ['./fieldPerformance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatExpansionModule,
    StaticProductionChartComponent,
    StaticFieldNetworkComponent,
    ExpansionPanelComponent,
    StaticOilProductionComponent,
    StaticNotificationPanelComponent,
    StaticGasProductionSummaryComponent,
    StaticOilProductionSummaryComponent,
    StaticTopOpportunitiesComponent,
    StaticProducerWellComponent,
    StaticTopUnderperformComponent,
    StaticGasInjectionComponent,
    StaticNoiseBackgroundCardComponent,
  ],
})
export class FieldPerformanceComponent implements OnInit, OnDestroy {
  private smartAlarmButtonSubscription: Subscription | undefined;
  isShowSmartAlarmPanel: boolean = true;
  expandGasProductionSummaryContainer: boolean = true;
  expandOilProductionSummaryContainer: boolean = false;
  readonly panelOpenState = signal(false);

  /**
   * Constructor
   */
  constructor(private smartAlarmToggleService: SmartAlarmToggleService) {}

  ngOnInit() {
    this.smartAlarmButtonSubscription =
      this.smartAlarmToggleService.buttonClicked$.subscribe(() => {
        this.isShowSmartAlarmPanel = !this.isShowSmartAlarmPanel;
      });
  }

  ngOnDestroy() {
    // Clean up the subscription to avoid memory leaks
    if (this.smartAlarmButtonSubscription) {
      this.smartAlarmButtonSubscription.unsubscribe();
    }
  }

  toggleExpandGasSummaryContainer() {
    this.expandGasProductionSummaryContainer = !this.expandGasProductionSummaryContainer;
    this.expandOilProductionSummaryContainer = !this.expandOilProductionSummaryContainer;
  }

  toggleExpandOilSummaryContainer() {
    this.expandOilProductionSummaryContainer = !this.expandOilProductionSummaryContainer;
    this.expandGasProductionSummaryContainer = !this.expandGasProductionSummaryContainer;
  }
}
