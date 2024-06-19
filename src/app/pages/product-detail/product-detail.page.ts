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
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/models/product';
import { FoodsService } from 'src/app/shared/services/foods.service';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-product-detail',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home/history"></ion-back-button>
        </ion-buttons>
        <ion-title>History</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon slot="icon-only" name="upload-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card *ngIf="food">
        <div class="card-header">
          <ion-img [src]="food.img"></ion-img>
          <div class="a">
            <h3>{{ food.title }}</h3>
            <div class="rate">
              <ion-icon name="ellipse"></ion-icon>
              <!-- <span class="A">88/100</span> -->
              <span class="A">{{ food.rating }}</span>
              <br />
            </div>
            <span class="b"> {{ food.ratingClass }}</span>
          </div>
        </div>
        <ion-card-header>
          <div class="header-info">
            <ion-card-title>Positives</ion-card-title>
            <ion-card-subtitle>per 100 g</ion-card-subtitle>
          </div></ion-card-header
        >
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-icon slot="start" name="hand-right-outline"></ion-icon>
              <ion-label>{{ food.additives }}</ion-label>

              <ion-icon
                slot="end"
                color="success"
                name="checkmark-outline"
              ></ion-icon>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" name="fish-outline"></ion-icon>
              <ion-label>Protein</ion-label>

              <ion-badge slot="end">{{ food.pg }}</ion-badge>

              <ion-icon slot="end" color="success" name="ellipse"></ion-icon>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" name="water-outline"></ion-icon>
              <ion-label>Saturated fat</ion-label>
              <ion-badge slot="end">{{ food.fat }}</ion-badge>
              <ion-icon slot="end" color="success" name="ellipse"></ion-icon>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" name="cube-outline"></ion-icon>
              <ion-label>Sugar</ion-label>
              <ion-badge slot="end">{{ food.sugar }}</ion-badge>
              <ion-icon slot="end" color="success" name="ellipse"></ion-icon>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" name="flame-outline"></ion-icon>
              <ion-label>Calories</ion-label>
              <ion-badge slot="end">{{ food.calories }}</ion-badge>
              <ion-icon slot="end" color="success" name="ellipse"></ion-icon>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" name="restaurant-outline"></ion-icon>
              <ion-label>Salt</ion-label>
              <ion-badge slot="end">{{ food.salt }}</ion-badge>
              <ion-icon slot="end" color="success" name="ellipse"></ion-icon>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card class="product-card">
        <ion-card-header>
          <h3>Product Overview</h3>
        </ion-card-header>
        <ion-card-content>
          <h3>Description:</h3>
          <p class="product-description">
            {{ food.Description }}
          </p>
          <div>
            <h3>StorageType:</h3>
            {{ food.storage }}
          </div>
          <ion-text color="danger">
            {{ food.reminder }}
          </ion-text>
          <br />
          <ion-text color=""
            >Recommendation:
            {{ food.recommendation }}
          </ion-text>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class ProductDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private foodsService: FoodsService
  ) {
    this.addAllIcons();
  }
  food: Food;
  addAllIcons() {
    addIcons({
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
    });
  }

  public foodsFood$ = this.foodsService.getFoods();
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.foodsService.getFoodBy(id).subscribe((food) => {
      this.food = food;
    });
  }
}
