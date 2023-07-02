import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class WeatherForecastComponent implements OnInit{
  forecasts: any;
  errorMessage: string = '';
  currentSlideIndex: number = 0;
  slideChangeTimeout: any;
  timeoutId: any;

  constructor(private weatherService: WeatherService, public themeService: ThemeService) {}
  ngOnInit(): void {
    this.weatherService.forecast$.subscribe(
      data => {
        console.log("Forecast dans display : ", data);
        this.forecasts = data;
      }
    );
    this.weatherService.errorSubject.subscribe(
      error => {
        this.errorMessage = error;
      }
    );

    this.timeoutId = setTimeout(() => this.nextSlide(), 5000);

  }

  // Méthode pour afficher la date
  getDateString(dateString: string): string {
    const date = new Date(dateString);

    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);

    const isToday = (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear());
    const isTomorrow = (date.getDate() === tomorrow.getDate() && date.getMonth() === tomorrow.getMonth() && date.getFullYear() === tomorrow.getFullYear());

    const weekdays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const dayOfWeek = weekdays[date.getDay()];

    let dayLabel: string;
    if (isToday) {
      dayLabel = 'Aujourd\'hui';
    } else if (isTomorrow) {
      dayLabel = 'Demain';
    } else {
      dayLabel = dayOfWeek;
    }

    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    if (date.getHours() < 10) {
      hours = '0' + hours;
    }
    if (date.getMinutes() < 10) {
      minutes = '0' + minutes;
    }

    return `${dayLabel} à ${hours}:${minutes}`;
  }

  // Méthode pour afficher le slider suivant
  nextSlide(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.forecasts.length;
    this.timeoutId = setTimeout(() => this.nextSlide(), 5000);
  }

  // Méthode pour afficher le slider précédent
  prevSlide(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.forecasts.length) % this.forecasts.length;
    this.timeoutId = setTimeout(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideChangeTimeout);
  }
}
