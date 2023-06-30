import {Component} from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {
  // forecastData: any;
  //
  // constructor(private weatherService: WeatherService) { }
  //
  // ngOnInit(): void {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.weatherService.getWeatherForecast(position.coords.latitude, position.coords.longitude)
  //       .subscribe(data => {
  //         console.log(data);  // Ajouter cette ligne
  //         this.forecastData = data;
  //       }, error => {
  //         this.forecastData = null;
  //         alert(error);
  //       });
  //   });
  // }
}
