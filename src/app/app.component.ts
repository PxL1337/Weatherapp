import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WeatherService} from "./services/weather.service";
import {Title} from "@angular/platform-browser";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void, false', style({ opacity: 0, display: 'none' })),
      state('true', style({ opacity: 1, display: 'block' })),
      transition('false => true', animate(500)),
      transition('true => false', animate(500))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Weatherapp';
  showForecast = false;

  constructor(public weatherService: WeatherService, private titleService: Title, public themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}

