import { Component } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(public themeService: ThemeService) { }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
