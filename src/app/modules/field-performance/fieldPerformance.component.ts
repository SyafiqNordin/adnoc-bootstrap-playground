import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticProductionChartComponent } from '../../components/production-chart/static-productionChart.component';
import { StaticOilProductionComponent } from '../../components/oil-production/static-oilProduction.component';
import { StaticFieldNetworkComponent } from '../../components/field-network/static-fieldNetwork.component';
import { StaticGasProductionSummaryComponent } from '../../components/gas-production-summary/static-gasProductionSummary.component';
import { StaticOilProductionSummaryComponent } from '../../components/oil-production-summary/static-oilProductionSummary.component';
import { SmartAlarmToggleService } from '../../services/smartAlarmToggle.service';
import { StaticSwappedSidepanelComponent } from '../../components/swapped-sidepanel/static-swappedSidepanel.component';
import { StaticTopOpportunitiesComponent } from '../../components/top-opportunities/static-topOpportunities.component';
import { StaticProducerWellComponent } from '../../components/producer-well/static-producerWell.component';
import { StaticTopUnderperformComponent } from '../../components/top-underperform/static-topUnderperform.component';
import { StaticGasInjectionComponent } from '../../components/gas-injection/static-gasInjection.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'field-performance',
  templateUrl: './fieldPerformance.component.html',
  styleUrls: ['./fieldPerformance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterLink,
    StaticProductionChartComponent,
    StaticFieldNetworkComponent,
    CommonModule,
    StaticOilProductionComponent,
    StaticSwappedSidepanelComponent,
    StaticGasProductionSummaryComponent,
    StaticOilProductionSummaryComponent,
    StaticTopOpportunitiesComponent,
    StaticProducerWellComponent,
    StaticTopUnderperformComponent,
    StaticGasInjectionComponent,
  ],
})
export class FieldPerformanceComponent implements OnInit, OnDestroy {
  private smartAlarmButtonSubscription: Subscription | undefined;
  isShowSmartAlarmPanel: boolean = true;
  expandGasProductionSummaryContainer: boolean = true;
  expandOilProductionSummaryContainer: boolean = false;
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
