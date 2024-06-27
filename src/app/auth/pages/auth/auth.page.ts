import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonCard,
  IonCardContent,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  imports: [
    IonIcon,
    IonCardContent,
    IonCard,
    RouterLink,
    IonImg,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
  selector: 'app-auth',
  template: `<ion-content class="background">
    <ion-card class="card-container">
      <ion-card-content>
        <h1>Welcome to <span class="text-warning">RatePro</span></h1>
        <h2>where you can adopt</h2>
        <h1><span class="text"> healthful way of life </span></h1>
        <ion-button expand="block" [routerLink]="['/login']"
          >Login</ion-button
        >
        <ion-button
          shape="round"
          expand="block"
          fill="outline"
          [routerLink]="['/signup']"
          >Register</ion-button
        >
      </ion-card-content>
    </ion-card>
  </ion-content> `,
  styleUrls: ['./auth.page.scss'],

  standalone: true,
})
export class AuthPage {
  constructor() {}
}
