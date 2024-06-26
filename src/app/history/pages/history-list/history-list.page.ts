import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { ProductsService } from '../../../shared/services/products.service';
import { HistoryService } from '../../../shared/services/history.service';
import { tap } from 'rxjs';

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
      <ng-container *ngFor="let productItem of scannedProducts">
        <app-product-item
          [product]="productItem"
          (showDetailsHandler)="showDetails($event)"
          (favoriteHandler)="addToFavorite($event)"
          (deleteHandler)="deleteFromHistory($event)"
        >
        </app-product-item>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['./history-list.page.scss'],
  standalone: true,
  imports: [...componentImports, ProductItemComponent],
})
export class HistoryListPage implements OnInit {
  private historyService = inject(HistoryService);
  private productService = inject(ProductsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public scannedProducts = [];
  public scannedProducts$ = this.historyService.getUsersHistory();

  constructor() {}

  ngOnInit(): void {
    this.loadScannedProducts()
  }

  public showDetails(id: string) {
    this.router
      .navigate(['../product-details', id], { relativeTo: this.route })
      .then();
  }

  public addToFavorite(id: string) {
    this.productService.addProductToFavorite(id).subscribe();
  }

  public deleteFromHistory(id: string) {
    console.log('id', id);
    this.historyService
      .removeUsersProductFromHistory(id)
      .pipe(tap(_ => this.loadScannedProducts()))
      .subscribe();
  }

  public loadScannedProducts() {
    this.historyService
    .getUsersHistory()
    .pipe(
      tap((products) => {
        this.scannedProducts = products;
      })
    )
    .subscribe();
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
