import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay, Subject} from "rxjs";
import {DayWeather} from "../models/day-weather";
import {ForecastWeather} from "../models/forecast-weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY: string = 'af5f145c588d6c2be0e393807dbfdb53';

  weatherSubject: Subject<DayWeather|undefined> = new Subject<DayWeather|undefined>();
  forecastSubject: Subject<ForecastWeather[]|undefined> = new Subject<ForecastWeather[]|undefined>()
  weather$: Observable<DayWeather|undefined>;
  forecast$: Observable<ForecastWeather[]|undefined>;
  errorSubject: Subject<string> = new Subject<string>();

  dataLoaded: boolean = false;


  constructor(private http: HttpClient) {
    //   if (!this.API_KEY || this.API_KEY === 'API_KEY') {
    //   throw new Error('Clé API non définie. Veuillez définir la variable d\'environnement API_KEY.');
    // }
    this.weather$ = this.weatherSubject.asObservable().pipe(shareReplay(1));
    this.forecast$ = this.forecastSubject.asObservable().pipe(shareReplay(1));
  }

  getCurrentMeteo(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},FR&lang=FR&units=metric&appid=${this.API_KEY}`;

    this.http.get<DayWeather>(url).subscribe({
      next: data => {
        console.log("data: ", data)
        this.weatherSubject.next(data);
        this.dataLoaded = true;

        //Récupérer les prévisions météo
        this.getForecastMeteoByCity(city);
      },
      error: error => {
        console.log("erreur: ", error)
        this.weatherSubject.next(undefined);
        this.errorSubject.next('Une erreur s\'est produite lors de la récupération des données météorologiques.');
        this.dataLoaded = false;
      }
    })
  }
  getCurrentMeteoByCoords(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=FR&appid=${this.API_KEY}`;

  this.http.get<DayWeather>(url).subscribe({
    next: data => {
      console.log("data: ", data)
      this.weatherSubject.next(data);
      this.dataLoaded = true;

      //Récupérer les prévisions météo
      this.getForecastMeteoByCoords(lat, lon);
    },
    error: error => {
      console.log("erreur: ", error)
      this.weatherSubject.next(undefined);
      this.errorSubject.next('Une erreur s\'est produite lors de la récupération des données météorologiques.');
      this.dataLoaded = false;
    }
  });
}

 getForecastMeteoByCity(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},FR&lang=FR&units=metric&appid=${this.API_KEY}`;

   this.http.get<{ list: ForecastWeather[] }>(url).subscribe({
      next: data => {
        const forecasts = data.list.map(forecast => ({
          ...forecast,
          dt_txt: new Date(forecast.dt ? forecast.dt * 1000 : Date.now()),
        }));
        console.log("ForecastByCitydata: ", data)
        this.forecastSubject.next(data.list);
      },
      error: error => {
        console.log("Forecasterror: ", error)
        this.forecastSubject.next(undefined);
        this.errorSubject.next('Une erreur s\'est produite lors de la récupération des données météorologiques.');
      }
    })
  }

  getForecastMeteoByCoords(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=FR&appid=${this.API_KEY}`;

    this.http.get<{ list: ForecastWeather[] }>(url).subscribe({
      next: data => {
        const forecasts = data.list.map(forecast => ({
          ...forecast,
          dt_txt: new Date(forecast.dt ? forecast.dt * 1000 : Date.now()),
        }));
        console.log("ForecastbyCoordsdata: ", data)
        this.forecastSubject.next(data.list);
      },
      error: error => {
        console.log("erreur: ", error)
        this.forecastSubject.next(undefined);
        this.errorSubject.next('Une erreur s\'est produite lors de la récupération des données météorologiques.');
      }
    });
  }
}
