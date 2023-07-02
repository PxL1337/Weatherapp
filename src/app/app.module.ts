import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { DonationsComponent } from './components/donations/donations.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { ThemeService } from './services/theme.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherCurrentComponent,
    WeatherForecastComponent,
    WeatherDetailComponent,
    DonationsComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    WeatherCardComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
    ThemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
