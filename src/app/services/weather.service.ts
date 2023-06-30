import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {DayWeather} from "../models/day-weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherSubject: Subject<DayWeather|undefined> = new Subject<DayWeather|undefined>()

  constructor(private http: HttpClient) { }

  getCurrentMeteo(city: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},FR&lang=FR&units=metric&appid=c93d76be506aeacd7d011be17bc6a3a8`;

    this.http.get<DayWeather>(url).subscribe({
      next: data => {
        console.log("data: ", data)
        this.weatherSubject.next(data);
      },
      error: data => {
        console.log("erreur: ", data)
        this.weatherSubject.next(undefined);
      }
    })
  }


  // private API_KEY = 'af5f145c588d6c2be0e393807dbfdb53'; // Remplacez ceci avec votre clé API
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
