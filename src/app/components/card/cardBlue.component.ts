import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './cardBlue.component.html',
  styleUrls: ['./cardBlue.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class cardBlueComponent {
  currentIndex: number = 0;
  swipeLeft: boolean = false;
  swipeRight: boolean = false;

  cards = [
    {
      gain: 345.3,
      wellName: 'MN001',
      expectedGain: '+23.4%',
      beforeValue: '321.45',
    },
    {
      gain: 194.3,
      wellName: 'MN092',
      expectedGain: '+17.3%',
      beforeValue: '162.5',
    },
    {
      gain: 310,
      wellName: 'MN012',
      expectedGain: '+19%',
      beforeValue: '298.5',
    },
    {
      gain: 185,
      wellName: 'MN127',
      expectedGain: '+17.3%',
      beforeValue: '174.52',
    },
    {
      gain: 125,
      wellName: 'MN831',
      expectedGain: '+8.1%',
      beforeValue: '112.9',
    },
    // Add more card data as needed
  ];

  get currentCard() {
    return this.cards[this.currentIndex];
  }

  changeCard(direction: number) {
    if (direction === 1) {
      this.swipeRight = true; // Swipe right for next
    } else {
      this.swipeLeft = true; // Swipe left for previous
    }

    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex + direction + this.cards.length) % this.cards.length; // Change card
      this.swipeLeft = false; // Reset swipe left
      this.swipeRight = false; // Reset swipe right
    }, 300); // Duration of swipe effect
  }
}
