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
@Component({
  selector: 'app-history',
  template: `
    <ion-content color="white">
      <button (click)="logout()">Logout</button>
      {{ foodsFood$ | async | json }}
      <ion-list>
        <!-- <ion-item
          (click)="getFoodBy(food.id)"
          *ngFor="let food of foodsFood$ | async"
          color="light"
          class="product-container"
          [button]="true"
        >
          <div class="product-img">
            <ion-img [src]="food.img"></ion-img>
          </div>
          <div class="product-infos">
            <h2>{{ food.title }}</h2>
            <span class="product-name">{{ food.name }}</span>
            <span class="timer">
              <ion-icon name="time-outline"></ion-icon
              ><span>{{ food.time }}</span>
            </span>
            <span class="rate">
              <ion-icon name="ellipse" [class]="food.ratingClass"></ion-icon>
              <span>{{ food.rating }}</span>
            </span>
          </div>
        </ion-item> -->
      </ion-list>
    </ion-content>
  `,
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
  private foodsService = inject(FoodsService);
  private authService = inject(AuthService);
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

  async logout() {
    await this.authService.signOut();
    console.log('log out success full');
  }
}

/**
 *  historyProducts = [
    {
      img: 'https://woodsfoodservice.co.uk/media/catalog/product/cache/57f672bc8bb1863d192ed0e81c28e78b/3/a/3ace7ff186351946b63f2083702a839c.jpg',
      title: 'Almond Milk',
      name: 'CHILLED',
      time: '2 weeks ago',
      rating: 'excellent',
      ratingClass: 'c',
    },
    {
      img: 'https://nawon.com.vn/wp-content/uploads/2020/10/Apple-Juice-Drink-is-a-healthy-natural-product-330ml-can-Brand-Nawon.jpg',
      title: 'NUOC EP TAO Apple',
      name: 'nawon',
      time: 'last week',
      rating: 'poor',
      ratingClass: 'r',
    },
    {
      img: 'https://i5.walmartimages.com/seo/CeraVe-Daily-Moisturizing-Face-Body-Lotion-with-Hyaluronic-Acid-for-Normal-to-Dry-Skin-12-oz_fa050fd7-4c62-4694-ac27-d28748a393f8_1.5f6dff2fcb1a5ec2f9b1437aea5dbd6f.jpeg',
      title: 'Body Lotion',
      name: 'CeraVe',
      time: 'yesterday',
      rating: 'excellent',
      ratingClass: 'c',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71gxGnJ4siL.jpg',
      title: 'Whey Protein',
      name: 'Muscle Milk',
      time: 'last week',
      rating: 'excellent',
      ratingClass: 'o',
    },
  ];

  // favoritesProducts = [
  //   {
  //     img: 'https://americanproductbynikita.com/146-thickbox/omega-3-fish-oil-1000-mg-100-softgels.jpg',
  //     title: 'Omega-3 Fish oil capsules',
  //     name: "Puritan's Pride",
  //     time: 'last week',
  //     rating: 'good',
  //     ratingClass: 'o',
  //   },
  //   {
  //     img: 'https://target.scene7.com/is/image/Target/GUEST_c9ac25cc-247c-452d-ada7-11f114f0547e?wid=488&hei=488&fmt=pjpeg',
  //     title: 'Organic gala apples',
  //     name: 'Good & Gather',
  //     time: 'today',
  //     rating: 'excellent',
  //     ratingClass: '<c>',
  //   },
  // ];
 */
//   <!-- <ion-header>
//   <ion-toolbar>
//     <ion-segment [(ngModel)]="selectTabs">
//       <ion-segment-button value="history">
//         <ion-label>History</ion-label>
//       </ion-segment-button>

//       <ion-segment-button value="favorites">
//         <ion-label>Favorites</ion-label>
//       </ion-segment-button>
//     </ion-segment>
//   </ion-toolbar>
// </ion-header> -->

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
