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
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
} from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-recs',
  templateUrl: './recs.page.html',
  styleUrls: ['./recs.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonList,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonImg,
    IonList,
  ],
})
export class RecsPage {
  constructor() {
    addIcons({ arrowForwardOutline });
  }
}
