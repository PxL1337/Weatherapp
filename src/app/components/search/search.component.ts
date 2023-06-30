import {Component} from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city = "";

  constructor(private weatherService: WeatherService) {
  }
  searchCity() {
    console.log("Recherche de la ville : ", this.city);
    this.weatherService.getCurrentMeteo(this.city)
  }
  // searchForm: FormGroup | any;
  // units = ['metric', 'imperial'];
  //
  // constructor(private fb: FormBuilder, private weatherService : WeatherService) { }
  //
  // ngOnInit(): void {
  //   this.searchForm = this.fb.group({
  //     city: [''],
  //     unit: ['metric']
  //   });
  // }
  //
  // onSearch(): void {
  //   const city = this.searchForm.get('city').value;
  //   const unit = this.searchForm.get('unit').value;
  //
  //   this.weatherService.getWeatherByCityName(city)
  //     .subscribe(data => {
  //       // Faire quelque chose avec les données
  //     }, error => {
  //       alert(error);
  //     });
  // }
  //
  // onGeolocation(): void {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const lat = position.coords.latitude;
  //       const lon = position.coords.longitude;
  //       const unit = this.searchForm.get('unit').value;
  //
  //       this.weatherService.getCurrentWeather(lat, lon)
  //         .subscribe(data => {
  //           // Faire quelque chose avec les données
  //         }, error => {
  //           alert(error);
  //         });
  //
  //       this.weatherService.getWeatherForecast(lat, lon)
  //         .subscribe(data => {
  //           // Faire quelque chose avec les données
  //         }, error => {
  //           alert(error);
  //         });
  //     });
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // }
}
