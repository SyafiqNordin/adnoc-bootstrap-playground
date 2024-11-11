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
export class cardBlueComponent {}
