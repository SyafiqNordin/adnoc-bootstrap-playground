import {
    Component,
    ViewEncapsulation
  } from '@angular/core';
  import { RouterLink } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { AnimationItem } from 'lottie-web';
  import { LottieComponent, AnimationOptions } from 'ngx-lottie';
  
  @Component({
    selector: 'static-gas-injection',
    templateUrl: './static-gasInjection.component.html',
    styleUrls: ['./static-gasInjection.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [RouterLink, CommonModule, LottieComponent],
  })
  export class StaticGasInjectionComponent {
    options: AnimationOptions = {
      path: 'assets/animations/red-arrow.json',
    };

    /**
     * Constructor
     */
    constructor() {}
  
    animationCreated(animationItem: AnimationItem): void {
      console.log(animationItem);
    };
  }
  