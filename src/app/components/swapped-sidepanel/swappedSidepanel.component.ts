import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'swapped-sidepanel',
    templateUrl: './swappedSidepanel.component.html',
    styleUrl: './swappedSidepanel.component.scss',
    standalone: true,
    imports: [RouterModule, CommonModule],  // Add CommonModule here
})
export class swappedSidepanelComponent {
    isOneFront = true;
    isTwoFront = false;

    toggleOne() {
        if (this.isOneFront) {
            console.log('has front class');
        } else {
            this.isOneFront = true;
            this.isTwoFront = false;
        }
    }

    toggleTwo() {
        if (this.isTwoFront) {
            console.log('has front class');
        } else {
            this.isTwoFront = true;
            this.isOneFront = false;
        }
    }
}
