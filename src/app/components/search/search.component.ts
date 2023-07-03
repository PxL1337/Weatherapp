import {Component} from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city = '';
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {
  }
  searchCity() {
    if (!this.city) {
      this.errorMessage = 'Veuillez entrer le nom d\'une ville.';
      return;
    }else {
      console.log("Recherche de la ville : ", this.city);
      this.weatherService.getCurrentMeteo(this.city);
      this.weatherService.getForecastMeteoByCity(this.city);
    }
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        // Vous pouvez maintenant appeler votre API de météo avec ces coordonnées
        this.weatherService.getCurrentMeteoByCoords(latitude, longitude);
        this.weatherService.getForecastMeteoByCoords(latitude, longitude);
      });
    } else {
      console.error("No support for geolocation")
    }
  }

  onInput() {
    this.errorMessage = '';
  }
}
