import {ActivatedRoute, Router} from '@angular/router';
import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, IonContent, ProductItemComponent],
  selector: 'app-product-list',
  template: `
    <ion-content color="white">
      <h1>Products list</h1>
      <ng-container *ngFor="let productItem of productList$ | async">
        <app-product-item
          [product]="productItem"
          (showDetailsHandler)="showDetails(productItem.id)"
        >
        </app-product-item>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
})
export class ProductListPage {
  private productsService = inject(ProductsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public productList$ = this.productsService.getProducts();

  constructor() {}

  public showDetails(id: string) {
    this.router.navigate(['../product-details', id], {relativeTo: this.route}).then();
  }

  // public selectTabs = 'history';
  // searchTerm: string = '';
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
