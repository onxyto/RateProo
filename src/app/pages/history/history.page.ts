import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonList,
  IonListHeader,
  IonItem,
  IonButton,
  IonImg,
  IonLabel,
  IonAvatar,
  IonButtons,
  IonSegment,
  IonSegmentButton,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { ellipse, personCircle, timeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonMenuButton } from '@ionic/angular/standalone';
import { IonMenu } from '@ionic/angular/standalone';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonRouterOutlet,

    IonSegmentButton,
    IonSegment,
    IonButtons,
    IonAvatar,
    IonLabel,
    IonImg,
    IonButton,
    IonItem,
    IonListHeader,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonMenuButton,
    IonImg,
    IonSegment,
    IonMenu,
  ],
})
export class HistoryPage {
  selectTabs = 'history';

  constructor() {
    addIcons({ timeOutline });
    addIcons({ ellipse });
    addIcons({ personCircle });
  }
}
