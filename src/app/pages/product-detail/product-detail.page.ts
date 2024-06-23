import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonCardTitle,
  IonCard,
  IonCheckbox,
  IonItem,
  IonList,
  IonCardContent,
  IonLabel,
  IonCardHeader,
  IonBadge,
  IonCardSubtitle,
  IonButton,
  IonImg,
  IonText,
} from '@ionic/angular/standalone';
import {
  checkmarkCircle,
  checkmarkOutline,
  cubeOutline,
  ellipse,
  ellipseOutline,
  fishOutline,
  flameOutline,
  handRightOutline,
  restaurantOutline,
  waterOutline,
  close,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from 'src/app/shared/services/foods.service';
import {
  ProductDetailsDto,
  ProductTypeEnum,
} from 'src/app/shared/models/product';
import { Observable } from 'rxjs';
import {
  getRatingClass,
  isNutritionRatingRecommended,
  nutritionIcon,
} from 'src/app/shared/utils';
import { NutritionsListComponent } from './components/nutritions-list/nutritions-list.component';
import { NutritionNatureEnum } from 'src/app/shared/enums/nutrition-labels.enum';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';

const componentIcons = {
  handRightOutline,
  checkmarkCircle,
  ellipse,
  ellipseOutline,
  checkmarkOutline,
  fishOutline,
  cubeOutline,
  waterOutline,
  flameOutline,
  restaurantOutline,
  close,
};
const componentImports = [
  IonText,
  IonImg,
  IonButton,
  IonCardSubtitle,
  IonBadge,
  IonCardHeader,
  IonLabel,
  IonCardContent,
  IonList,
  IonItem,
  IonCheckbox,
  IonCard,
  IonCardTitle,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  CommonModule,
  FormsModule,
  NutritionsListComponent,
  IngredientsListComponent
];
@Component({
  selector: 'app-product-detail',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/history"></ion-back-button>
        </ion-buttons>
        <ion-title>History</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ng-container *ngIf="productDetails$ | async as productDetails">
        <ion-card>
          <div class="card-header">
            <div class="card-img">
              <ion-img [src]="productDetails.image_url"></ion-img>
            </div>
            <div class="card-infos">
              <h3>{{ productDetails.title }}</h3>
              <div [class]="_getRatingClass(productDetails.rating)">
                <ion-icon name="ellipse"></ion-icon>
                <span>{{ productDetails.rating }}</span>
              </div>
            </div>
          </div>
          <ng-container *ngIf="showNutritions(productDetails)">
            <app-nutritions-list
              [nutritions]="productDetails.nutritions"
            ></app-nutritions-list>
          </ng-container>
          <ng-container *ngIf="showIngredients(productDetails)">
            <app-ingredients-list
              [ingredients]="productDetails.ingredients"
            ></app-ingredients-list>
          </ng-container>
        </ion-card>

        <ion-card class="product-card">
          <ion-card-header>
            <h3>Product Overview</h3>
          </ion-card-header>
          <ion-card-content>
            <h3>Description:</h3>
            <p class="product-description">
              {{ productDetails.description }}
            </p>
            <div>
              <h3>StorageType:</h3>
              {{ productDetails.storage_type }}
            </div>
          </ion-card-content>
        </ion-card>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [...componentImports],
})
export class ProductDetailPage implements OnInit {
  public productDetails$: Observable<ProductDetailsDto> = null;

  constructor(
    private route: ActivatedRoute,
    private foodsService: FoodsService
  ) {
    addIcons({ ...componentIcons });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productDetails$ = this.foodsService.getFoodBy(id);
  }

  public _getRatingClass(rating: number) {
    return getRatingClass(rating);
  }

  public showNutritions(productDetails: ProductDetailsDto): boolean {
    return (
      (productDetails?.type === ProductTypeEnum.FOOD ||
        productDetails?.type === ProductTypeEnum.DRINK) &&
      productDetails?.nutritions.length !== 0
    );
  }

  public showIngredients(productDetails: ProductDetailsDto): boolean {
    return (
      productDetails?.type === ProductTypeEnum.COSMETIC &&
      productDetails?.ingredients.length !== 0
    );
  }
}
