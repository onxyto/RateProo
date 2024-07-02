import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
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
  arrowBackOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from 'src/app/shared/services/foods.service';
import {
  ProductDetailsDto,
  ProductTypeEnum,
} from 'src/app/shared/models/product';
import { Observable } from 'rxjs';
import { getRatingClass } from 'src/app/shared/utils';
import { NutritionsListComponent } from '../../components/nutritions-list/nutritions-list.component';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';

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
  arrowBackOutline,
};
@Component({
  imports: [
    IonButton,
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
    IngredientsListComponent,
  ],
  selector: 'app-product-details',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-button (click)="goBack()" fill="clear">
          <ion-icon slot="icon-only" name="arrow-back-outline"></ion-icon>
          <h2 class="title">Product details</h2>
        </ion-button>
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
              <h6>{{ productDetails.name }}</h6>
              <div [class]="_getRatingClass(productDetails.rating)">
                <ion-icon name="ellipse"></ion-icon>
                <strong>{{ productDetails.rating }}/100</strong>
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

        <ng-container *ngIf="showNutritions(productDetails)">
          <ion-card>
            <div class="header">
              <h3>Product Overview</h3>
            </div>
            <ion-card-content>
              <h3>Description:</h3>
              <div class="Description">
                <p>
                  {{ productDetails.description }}
                </p>
              </div>

              <h3>StorageType:</h3>
              <div class="storagetype">
                {{ productDetails.storage_type }}
              </div>
            </ion-card-content>
          </ion-card>
        </ng-container>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
})
export class ProductDetailsPage implements OnInit {
  public productDetails$: Observable<ProductDetailsDto> = null;

  constructor(
    private route: ActivatedRoute,
    private foodsService: FoodsService,
    private _location: Location
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

  public goBack() {
    this._location.back();
  }
}
