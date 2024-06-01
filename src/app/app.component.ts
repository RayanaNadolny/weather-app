import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  city = '';
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  search() {
    if (this.city.length === 0) return;

    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        this.weatherData = res;
      },
      error: () => {
        alert('City not found');
      }
    });
  }
}
