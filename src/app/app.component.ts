import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchThemeService } from './services/switchTheme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private SwitchThemeService: SwitchThemeService) {}

  ngOnInit() {
    // Set default theme to dark
    this.SwitchThemeService.setTheme('dark');
  }
}
