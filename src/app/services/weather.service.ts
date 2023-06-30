import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {DayWeather} from "../models/day-weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherSubject: Subject<DayWeather|undefined> = new Subject<DayWeather|undefined>();
  errorSubject: Subject<string> = new Subject<string>();
  API_KEY: string = process.env['API_KEY'] || '';


  constructor(private http: HttpClient) {
      if (!this.API_KEY) {
      throw new Error('Clé API non définie. Veuillez définir la variable d\'environnement API_KEY.');
    }
  }

  getCurrentMeteo(city: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},FR&lang=FR&units=metric&appid=${this.API_KEY}`;

    this.http.get<DayWeather>(url).subscribe({
      next: data => {
        console.log("data: ", data)
        this.weatherSubject.next(data);
      },
      error: error => {
        console.log("erreur: ", error)
        this.weatherSubject.next(undefined);
        this.errorSubject.next('Une erreur s\'est produite lors de la récupération des données météorologiques.');
      }
    })
  }


  // private API_KEY = ''; // Remplacez ceci avec votre clé API
  // private API_URL = 'http://api.openweathermap.org/data/2.5/weather';
  // private FORECAST_API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
  //
  // constructor(private http: HttpClient) { }
  //
  // getCurrentWeather(lat: number, lon: number) {
  //   this.http.get(`${this.API_URL}?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=${unit}`)
  //     .pipe(
  //       catchError(error => {
  //         console.error(error);
  //         return throwError('Error fetching weather data');
  //       })
  //     );
  // }
  //
  // getWeatherByCityName(city: string) {
  //   return this.http.get(`${this.API_URL}?q=${city}&appid=${this.API_KEY}`)
  //     .pipe(
  //       catchError(error => {
  //         console.error(error);
  //         return throwError('Error fetching weather data');
  //       })
  //     );
  // }
  //
  // getWeatherForecast(lat: number, lon: number) {
  //   return this.http.get(`${this.FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`)
  //     .pipe(
  //       catchError(error => {
  //         console.error(error);
  //         return throwError('Error fetching weather forecast data');
  //       })
  //     );
  // }
}
