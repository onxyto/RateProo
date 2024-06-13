import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonBadge,
  IonItem,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonCardContent,
  IonCard,
  IonCardSubtitle,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCheckbox,
  IonCol,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  checkmarkCircle,
  checkmarkCircleOutline,
  checkmarkOutline,
  cubeOutline,
  ellipse,
  ellipseOutline,
  fishOutline,
  flameOutline,
  handRightOutline,
  restaurantOutline,
  waterOutline,
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonCol,
    IonCheckbox,
    IonBackButton,
    IonButtons,
    IonButton,
    IonCardSubtitle,
    IonCard,
    IonCardContent,
    IonList,
    IonCardTitle,
    IonCardHeader,
    IonItem,
    IonBadge,
    IonLabel,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    RouterLink,
    FormsModule,
  ],
})
export class OverviewPage {
  constructor() {
    this.addAllIcons();
  }
  addAllIcons() {
    addIcons({
      handRightOutline,
      checkmarkCircle,
      ellipse,
      ellipseOutline,
      checkmarkOutline,
      fishOutline,
      cubeOutline,
      waterOutline,
      flameOutline,
      restaurantOutline,
    });
  }
}
