import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KENDO_GRID, ColumnMenuSettings, PagerPosition, PagerType } from "@progress/kendo-angular-grid";
import { KENDO_DROPDOWNLIST, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";

export interface TableItem {
    well: string;
    deferment: number;
    percentageChange: string;
    actual: number;
  }
@Component({
    selector: "static-exceptions-well",
    templateUrl: './static-exceptionsWell.component.html',
    styleUrl: './static-exceptionsWell.component.scss',
    standalone: true,
    imports: [
        RouterModule,
        CommonModule,
        KENDO_GRID,
        KENDO_DROPDOWNLIST,
        FormsModule,
        DropDownsModule,
        KENDO_BUTTON,
    ],
})
export class StaticExceptionsWellComponent {

    exceptionsWell: any[] = [
        {
            wellName: "DY-001-LS",
            dateTime: "2024-07-14 16:01:00",
            category: "Compliance",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
        {
            wellName: "DY-003-LS",
            dateTime: "2024-07-14 16:01:00",
            category: "Compliance",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
        {
            wellName: "DY-001-LS",
            dateTime: "2024-07-14 16:01:00",
            category: "Compliance",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
        {
            wellName: "DY-001-LS",
            dateTime: "2024-07-14 16:01:00",
            category: "Reservoir Management",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Pending",
        },
        {
            wellName: "DY-A005",
            dateTime: "2024-07-14 16:01:00",
            category: "Reservoir Management",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
        {
            wellName: "DY-A006",
            dateTime: "2024-07-14 16:01:00",
            category: "Optimization",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Pending",
        },
        {
            wellName: "DY-A007",
            dateTime: "2024-07-14 16:01:00",
            category: "Compliance",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Pending",
        },
        {
            wellName: "DY-A008",
            dateTime: "2024-07-14 16:01:00",
            category: "Reservoir Management",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
        {
            wellName: "DY-A009",
            dateTime: "2024-07-14 16:01:00",
            category: "Compliance",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
        {
            wellName: "DY-A010",
            dateTime: "2024-07-14 16:01:00",
            category: "Compliance",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Pending",
        },
        {
            wellName: "DY-A011",
            dateTime: "2024-07-14 16:01:00",
            category: "Measurement",
            eventName: "WI below guideline",
            indicator: "WIR: 1,000 bbl/d",
            criteria: "<2,000 psia",
            status: "Ticket Raised",
        },
    ];

    public filteredGridData: any[] = [...this.exceptionsWell];
    public categories: string[] = ['All', ...new Set(this.exceptionsWell.map(item => item.category))];
    public selectedCategory: string = 'All';
    
    public pageSizes = [10, 20, 50];
    public pageSize = 10;
    public previousNext = true;
    public position: PagerPosition = "bottom";
    public pagerTypes = ["numeric", "input"];
    public type: PagerType = "numeric";
    public info = true;
    public buttonCount = 10;

    public stripedRows = (args: any) => ({
        'striped-row': args.index % 2 === 0
    });

    // Filtering logic
    public onCategoryFilterChange(selected: string): void {
        if (selected === 'All') {
        this.filteredGridData = [...this.exceptionsWell];
        } else {
        this.filteredGridData = this.exceptionsWell.filter(item => item.category === selected);
        }
    }

    public menuSettings: ColumnMenuSettings = {
        lock: true,
        stick: true,
        setColumnPosition: { expanded: true },
        autoSizeColumn: true,
        autoSizeAllColumns: true,
    };
}
