import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KENDO_GRID, PagerPosition, PagerType, DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { KENDO_DROPDOWNLIST, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';

@Component({
    selector: "intervention-history-table",
    templateUrl: './interventionHistoryTable.component.html',
    styleUrl: './interventionHistoryTable.component.scss',
    standalone: true,
    imports: [
        RouterModule,
        CommonModule,
        KENDO_GRID,
        KENDO_DROPDOWNLIST,
        FormsModule,
        DropDownsModule,
        KENDO_BUTTON,
        KENDO_TEXTBOX,
    ],
})
export class InterventionHistoryComponent implements AfterViewInit {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective | undefined;

    exceptionsWell: any[] = [
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-15 19:29:00",
            endDateTime: "2024-07-15 19:53:00",
            interventionType: "GVL Calibration",
            interventionDetails: "Adjusted valve opening pressure from 1,500 psi to 1450 psi.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "Perforation Cleanup",
            interventionDetails: "Removed debris from perforations between 3,000-3,100 ft.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "Scale Treatment",
            interventionDetails: "Injected 150 gallons of scale inhibitor at 5,000 ft.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "Wellhead Valve Replacement",
            interventionDetails: "Replaced a leaking master valve with a new 5,000 psi-rated valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "Wellhead Valve Replacement",
            interventionDetails: "Replaced a leaking master valve with a new 5,000 psi-rated valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
        {
            startDateTime: "2024-07-14 16:01:00",
            endDateTime: "2024-07-14 16:01:00",
            interventionType: "GVL Replacement",
            interventionDetails: "Replaced a malfunctioning valve at 5,000 ft with a 1/4” orifice valve.",
        },
    ];
    public filteredGridData: any[] = [...this.exceptionsWell];
 
    public pageSizes = [10, 20, 50];
    public pageSize = 10;
    public previousNext = true;
    public position: PagerPosition = "bottom";
    public type: PagerType = "numeric";
    public info = true;
    public buttonCount = 10;

    public stripedRows = (args: any) => ({
        'striped-row': args.index % 2 === 0
    });

    ngAfterViewInit() {
        if (this.dataBinding) {
            this.dataBinding.skip = 0;
        }
    }

    public onFilter(inputValue: string): void {
        this.filteredGridData = process(this.exceptionsWell, {
          filter: {
            logic: "or",
            filters: [
              {
                field: "startDateTime",
                operator: "contains",
                value: inputValue,
              },
              {
                field: "endDateTime",
                operator: "contains",
                value: inputValue,
              },
              {
                field: "interventionType",
                operator: "contains",
                value: inputValue,
              },
              {
                field: "interventionDetails",
                operator: "contains",
                value: inputValue,
              },
            ],
          },
        }).data;
    
        if (this.dataBinding) {
            this.dataBinding.skip = 0;
        }
    }
}
