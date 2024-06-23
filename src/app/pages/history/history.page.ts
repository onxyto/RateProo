import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
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

import { FoodsService } from 'src/app/shared/services/foods.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { getRatingClass } from 'src/app/shared/utils';

const componentImports = [
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
];
@Component({
  selector: 'app-history',
  template: `
    <ion-content color="white">
      <h1>History</h1>
      <ion-list>
        <ion-item
          (click)="getFoodBy(food.id)"
          *ngFor="let food of foodsFood$ | async"
          color="light"
          class="product-container"
          [button]="true"
        >
          <div class="product-img">
            <ion-img [src]="food.image_url"></ion-img>
          </div>
          <div class="product-infos">
            <h3>{{ food.title }}</h3>
            <span class="product-name">{{ food.name }}</span>
            <span class="timer">
              <ion-icon name="time-outline"></ion-icon
              ><span>{{ food.created_at | date : 'dd/MM/yyyy' }}</span>
            </span>
            <span [class]="_getRatingClass(food.rating)">
              <ion-icon name="ellipse" class="c"></ion-icon>
              <span>{{ food.rating }}</span>
            </span>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [...componentImports],
})
export class HistoryPage {
  private foodsService = inject(FoodsService);

  private router = inject(Router);
  // public selectTabs = 'history';
  searchTerm: string = '';

  constructor() {
    addIcons({ timeOutline });
    addIcons({ ellipse });
    addIcons({ personCircle });
  }

  public foodsFood$ = this.foodsService.getFoods();

  public getFoodBy(id: number) {
    this.router.navigate(['/product-detail', id]);
  }

  public _getRatingClass(rating: number) {
    return getRatingClass(rating);
  }
}

// <!-- <div *ngIf="selectTabs === 'favorites'">
// <ion-list>
//   <ion-item
//     *ngFor="let product of favoritesProducts"
//     color="light"
//     class="product-container"
//     [button]="true"
//   >
//     <div class="product-img">
//       <ion-img [src]="product.img"></ion-img>
//     </div>
//     <div class="product-infos">
//       <h2>{{ product.title }}</h2>
//       <span class="product-name">{{ product.name }}</span>
//       <span class="timer">
//         <ion-icon name="time-outline"></ion-icon
//         ><span>{{ product.time }}</span>
//       </span>
//       <span class="rate">
//         <ion-icon
//           name="ellipse"
//           [class]="product.ratingClass"
//         ></ion-icon>
//         <span>{{ product.rating }}</span>
//       </span>
//     </div>
//   </ion-item>
// </ion-list>
// </div>
// </ion-content> -->
