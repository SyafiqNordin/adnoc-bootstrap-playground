import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticProductionChartComponent } from '../../components/production-chart/static-productionChart.component';
import { StaticOilProductionComponent } from '../../components/oil-production/static-oilProduction.component';
import { StaticFieldNetworkComponent } from '../../components/field-network/static-fieldNetwork.component';
import { StaticGasProductionComponent } from '../../components/gas-production/static-gasProduction.component';
import { SmartAlarmToggleService } from '../../services/smartAlarmToggle.service';
import { Subscription } from 'rxjs';
import { StaticSwappedSidepanelComponent } from '../../components/swapped-sidepanel/static-swappedSidepanel.component';
import { StaticTopOpportunitiesComponent } from '../../components/swapped-top-opportunities/static-topOpportunities.component';

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
    StaticGasProductionComponent,
    StaticTopOpportunitiesComponent,
  ],
})
export class FieldPerformanceComponent implements OnInit, OnDestroy {
  private smartAlarmButtonSubscription: Subscription | undefined;
  isShowSmartAlarmPanel: boolean = true;
  expandGasProductionContainer: boolean = true;
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

  toggleExpandContainer() {
    this.expandGasProductionContainer = !this.expandGasProductionContainer;
  }
}
