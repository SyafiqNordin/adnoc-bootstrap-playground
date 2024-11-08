import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'swapped-sidepanel',
    templateUrl: './swappedSidepanel.component.html',
    styleUrl: './swappedSidepanel.component.scss',
    standalone: true,
    imports: [RouterModule, CommonModule],
})

export class swappedSidepanelComponent {
    activePanel: string = 'one';
  
    bringToFront(panel: string) {
        this.activePanel = panel;
      }
  }
  