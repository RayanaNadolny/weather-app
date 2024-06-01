import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'a828c13127e3f418c7165b3a62ed0ec8';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('apiKey', this.apiKey);

    return this.http.get(this.apiUrl, {params: options});
  }
}
