import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonImg,
  IonSearchbar,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonList,
    IonItem,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,

    IonIcon,
    IonSearchbar,
  ],
})
export class SearchPage {
  public data = [
    'Nestle',
    'Nivea',
    'felix',
    'Maggi',
    'Vichy',
    'Nespresso',
    'Perrier',
    'Lipton',
    'Vaseline',
    'Miko',
  ];
  public results = [...this.data];
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}
