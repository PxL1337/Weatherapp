import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {Title} from "@angular/platform-browser";
import {animate, style, transition, trigger} from "@angular/animations";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(600, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit{
  @Output() showCurrentEvent = new EventEmitter<void>();
  @Output() showForecastEvent = new EventEmitter<void>();

  showForecast: boolean = false;
  isDarkTheme: boolean = true;

  constructor(public weatherService: WeatherService, private titleService: Title, public themeService: ThemeService) { }

  switchView() {
    this.showForecast = !this.showForecast;

    if (this.showForecast) {
      this.showForecastEvent.emit();
    } else {
      this.showCurrentEvent.emit();
    }
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  get buttonText(): string {
    return this.showForecast ? 'Météo actuelle' : 'Prévisions';
  }
  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

}
