import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLinkWithHref } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLinkWithHref,IonSearchbar,CommonModule,FormsModule],
})
export class HomePage implements OnInit{
  myStatus: string = "";
  searchQuery: string = '';
  weather: any;
  errorMessage: string = '';
  private weatherSubscription: Subscription | undefined;

  constructor(private http: HttpClient, private router:Router,) { }

  ngOnInit() {
    this.getWeather('');
  }

  ngOnDestroy() {
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }

  searchLocation() {
    if (this.searchQuery.trim() !== '') {
      this.getWeather(this.searchQuery.trim());
    }
  }

  getWeather(location: string) {
    const API_KEY = '919944b75fbc445d92d091c242be1b7e';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + API_KEY;

    this.weatherSubscription = this.http.get(API_URL).subscribe({
      next: (data: any) => {
        this.weather = {
          description: data.weather[0].description,
          temperature: this.convertKelvinToCelsius(data.main.temp),
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
        };
        this.errorMessage = '';
       
      },
      error: (error) => {
        console.error('Error fetching weather:', error);
        this.errorMessage = 'Location not found. Enter a valid location.';
        this.weather = null;
      }
    });
  }

  convertKelvinToCelsius(temp: number): number {
    return temp - 273.15;
    
  }
  }








