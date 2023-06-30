import {Component, Input} from '@angular/core';
import {DayWeather} from "../../models/day-weather";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weather: DayWeather = {} as DayWeather;
}
