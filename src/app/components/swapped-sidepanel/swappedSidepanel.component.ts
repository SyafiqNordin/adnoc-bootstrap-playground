import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { timestamp } from 'rxjs';

@Component({
    selector: 'swapped-sidepanel',
    templateUrl: './swappedSidepanel.component.html',
    styleUrl: './swappedSidepanel.component.scss',
    standalone: true,
    imports: [RouterModule, CommonModule],
})
  
export class swappedSidepanelComponent implements OnInit {
    activePanel: string = 'one';
    smartTickets: any[] = []; // Array to hold smart ticket details

    constructor() {}

    ngOnInit(): void {
        this.loadDummyData(); // Load dummy data for testing
    }

    // Dummy data loading function
    loadDummyData(): void {
        this.smartTickets = [
        {
            title: 'MN190',
            timestamp: '47 seconds ago',
            recommendation: 'Consider increasing monitoring frequency for optimal performance.'
        },
        {
            title: 'XR210',
            timestamp: '1 minute ago',
            recommendation: 'Adjust pressure settings to enhance efficiency in this area.'
        },
        {
            title: 'HT455',
            timestamp: '2 minute ago',
            recommendation: 'Review temperature controls to ensure stable output levels.'
        }
        ];
    }

    bringToFront(panel: string): void {
        this.activePanel = panel;
    }

    viewMore(ticket: any): void {
        console.log('View More:', ticket);
        // You can add additional logic here for the "View More" action
    }
}