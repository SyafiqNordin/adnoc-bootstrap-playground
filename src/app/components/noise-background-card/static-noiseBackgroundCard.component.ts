import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'static-noise-background-card',
  templateUrl: './static-noiseBackgroundCard.component.html',
  styleUrls: ['./static-noiseBackgroundCard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class StaticNoiseBackgroundCardComponent {
  /**
   * Constructor
   */
  constructor() {}
}
