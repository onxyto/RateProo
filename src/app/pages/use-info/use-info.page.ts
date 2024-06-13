import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-use-info',
  templateUrl: './use-info.page.html',
  styleUrls: ['./use-info.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class UseInfoPage {
  constructor() {}

  // ngOnInit() {
  // }
}
