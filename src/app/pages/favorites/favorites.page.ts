import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonImg,
  IonIcon,
  IonItem,
  IonButtons,
  IonBackButton,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipse, personCircle, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonButton,
    IonBackButton,
    IonButtons,
    IonItem,
    IonIcon,
    IonImg,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonImg,
  ],
})
export class FavoritesPage {
  constructor() {
    addIcons({ timeOutline });
    addIcons({ ellipse });
    addIcons({ personCircle });
  }
  favoritesProducts = [
    {
      img: 'https://americanproductbynikita.com/146-thickbox/omega-3-fish-oil-1000-mg-100-softgels.jpg',
      title: 'Omega-3 Fish oil capsules',
      name: "Puritan's Pride",
      time: 'last week',
      rating: 'good',
      ratingClass: 'o',
    },
    {
      img: 'https://target.scene7.com/is/image/Target/GUEST_c9ac25cc-247c-452d-ada7-11f114f0547e?wid=488&hei=488&fmt=pjpeg',
      title: 'Organic gala apples',
      name: 'Good & Gather',
      time: 'today',
      rating: 'excellent',
      ratingClass: 'c',
    },
  ];
  // ngOnInit() {
  // }
}
