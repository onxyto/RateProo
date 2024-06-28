import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IonContent, IonSearchbar } from '@ionic/angular/standalone';

import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { ProductListDto } from '../../../shared/models/product';

@Component({
  imports: [CommonModule, IonContent, ProductItemComponent, IonSearchbar],
  selector: 'app-product-list',
  template: `
    <ion-content color="white">
      <h1>Products list</h1>
      <ion-searchbar
        id="searchbar"
        mode="ios"
        color="light"
        type="text"
        (ionInput)="onSearchChange($event)"
        [placeholder]="'search by product'"
      ></ion-searchbar>
      <ng-container *ngFor="let productItem of filteredList">
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
export class ProductListPage implements OnInit, OnDestroy {
  private productsService = inject(ProductsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected unsubscribe$ = new Subject<void>();

  private searchSubject$: Subject<string> = new Subject<string>();

  public productList: ProductListDto[] = [];
  public filteredList: ProductListDto[] = [];

  constructor() {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .pipe(
        tap((products) => {
          this.productList = products;
          this.filteredList = products;
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
    this.searchProductsByKeyword();
  }

  public showDetails(id: string) {
    this.router
      .navigate(['../product-details', id], { relativeTo: this.route })
      .then();
  }

  protected onSearchChange(keyword: any) {
    this.searchSubject$.next(keyword.detail.value);
  }

  public searchProductsByKeyword() {
    this.searchSubject$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(
          (searchText) => searchText.length >= 3 || searchText.length === 0
        ),
        tap(
          (searchText) =>
            (this.filteredList = this.productList.filter(
              (product) =>
                product.name.toLowerCase().includes(searchText.toLowerCase()) ||
                product.title.toLowerCase().includes(searchText.toLowerCase())
            ))
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
