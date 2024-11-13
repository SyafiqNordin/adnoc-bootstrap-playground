import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductionChartComponent } from '../../components/production-chart/productionChart.component';
import { OilProductionComponent } from '../../components/oil-production/oilProduction.component';
import { FieldNetworkComponent } from '../../components/field-network/fieldNetwork.component';
import { SmartAlarmToggleService } from '../../services/smart-alarm-toggle.service';
import { Subscription } from 'rxjs';
import { swappedSidepanelComponent } from '../../components/swapped-sidepanel/swappedSidepanel.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterLink,
    ProductionChartComponent,
    FieldNetworkComponent,
    CommonModule,
    OilProductionComponent,
    swappedSidepanelComponent,
  ],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private smartAlarmButtonSubscription: Subscription | undefined;
  isShowSmartAlarmPanel: boolean = true;
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
}
