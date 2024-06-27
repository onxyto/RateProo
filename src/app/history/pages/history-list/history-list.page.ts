import {ActivatedRoute, Router, RouterLink} from '@angular/router';
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
import { getRatingClass } from 'src/app/shared/utils';
import {ProductItemComponent} from "../../../shared/components/product-item/product-item.component";
import {ProductsService} from "../../../shared/services/products.service";
import {HistoryService} from "../../../shared/services/history.service";

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
      <h1>History list</h1>
      <ng-container *ngFor="let productItem of scannedProducts$ | async">
        <app-product-item
          [product]="productItem"
          (showDetailsHandler)="showDetails(productItem.id)"
        >
        </app-product-item>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['./history-list.page.scss'],
  standalone: true,
  imports: [...componentImports, ProductItemComponent],
})
export class HistoryListPage {
  private historyService = inject(HistoryService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public scannedProducts$ = this.historyService.getUsersHistory();

  constructor() {}

  public showDetails(id: string) {
    this.router.navigate(['../product-details', id], {relativeTo: this.route}).then();
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
