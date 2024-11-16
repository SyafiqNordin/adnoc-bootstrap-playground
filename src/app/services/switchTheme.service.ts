import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchThemeService {
  private currentTheme: 'light' | 'dark' = 'dark';

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    const htmlElement = document.documentElement; // Access the root <html> element

    if (theme === 'dark') {
      htmlElement.classList.remove('light-theme');
      htmlElement.classList.add('dark-theme');
    } else {
      htmlElement.classList.remove('dark-theme');
      htmlElement.classList.add('light-theme');
    }
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}