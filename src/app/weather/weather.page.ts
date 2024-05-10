import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
IonRadio, IonRadioGroup, IonList, IonItem, IonLabel, IonButton,
IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
selector: 'app-weather',
templateUrl: './weather.page.html',
styleUrls: ['./weather.page.scss'],
standalone: true,
imports: [IonContent, IonHeader, IonTitle, IonToolbar,
CommonModule, FormsModule, IonRadio, IonRadioGroup,
IonList, IonItem, IonLabel, IonButton, IonButtons,
IonBackButton]

})

export class WeatherPage implements OnInit {
  myOpionion: string = "";
  constructor(private storage: Storage, private router: Router) { }
  ngOnInit() {
  }
  async ionViewWillEnter() {
  await this.storage.create();
  this.myOpionion = await this.storage.get('status');
  }
  
  
  async saveStatus() {
  await this.storage.set('status', this.myOpionion)
  .then(
  ()=>{
  this.router.navigate(['/home'])
  })
  .catch();
  }
  }



