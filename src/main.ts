/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(), provideAnimationsAsync(), provideAnimationsAsync(), // Enable Angular Animations
  ],
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));