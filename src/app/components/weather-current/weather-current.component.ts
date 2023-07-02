import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css']
})
export class WeatherCurrentComponent implements OnInit {
  weather: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService, public themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.weatherService.weather$.subscribe(
      data => {
        console.log("Current dans display : ",data);
        this.weather = data;
      }
    );
    this.weatherService.errorSubject.subscribe((error) => {
      this.errorMessage = error;
    });
  }
  // weatherData: any;
  //
  // constructor(private weatherService: WeatherService) { }

  // ngOnInit(): void {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.weatherService.getCurrentWeather(position.coords.latitude, position.coords.longitude)
  //       .subscribe(data => {
  //         this.weatherData = data;
  //       }, error => {
  //         this.weatherData = null;
  //         alert(error);
  //       });
  //   });
  // }
  //
  // promptForCity() {
  //   const city = prompt('Enter city name');
  //   if (city) {
  //     this.weatherService.getWeatherByCityName(city)
  //       .subscribe(data => {
  //         this.weatherData = data;
  //       }, error => {
  //         this.weatherData = null;
  //         alert(error);
  //       });
  //   }
  // }
}



