import { lockClosedOutline, personOutline } from 'ionicons/icons';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonInput,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonIcon,
    IonItem,
    IonCardContent,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class SignupPage {
  constructor() {
    addIcons({ personOutline });
    addIcons({ lockClosedOutline });
  }
}
