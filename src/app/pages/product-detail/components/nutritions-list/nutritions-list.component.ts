import { Component, Input, OnInit } from '@angular/core';
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

import { NutritionDto } from 'src/app/shared/models/product';
import {
  isNutritionRatingRecommended,
  nutritionIcon,
} from 'src/app/shared/utils';

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
  IonList,
  IonIcon,
  IonCardContent,
  CommonModule,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
];
@Component({
  selector: 'app-nutritions-list',
  template: `
    <ion-card-header>
      <div class="header-info">
        <ion-card-title>Positives</ion-card-title>
        <ion-card-subtitle>per 100 g</ion-card-subtitle>
      </div></ion-card-header
    >
    <ion-card-content>
      <ion-list class="nutritions">
        <ion-item *ngFor="let nutrition of nutritions">
          <div class="nutrition-item">
            <div class="nutrition-infos">
              <ion-icon slot="start" [name]="getNutritionIcon(nutrition.name)">
              </ion-icon>
              <ion-label>{{ nutrition.name }}</ion-label>
              <ion-badge slot="end"
                >{{ nutrition.quantity }}
                <span *ngIf="nutrition.symbol !== 'none'">
                  {{ nutrition.symbol }}
                </span></ion-badge
              >

              <ion-icon
                *ngIf="
                  !_getNutritionRatingRecommended(
                    nutrition.name,
                    nutrition.quantity
                  );
                  else successIcon
                "
                slot="end"
                color="danger"
                name="close"
              ></ion-icon>
              <ng-template #successIcon>
                <ion-icon
                  slot="end"
                  color="success"
                  name="checkmark-outline"
                ></ion-icon>
              </ng-template>
            </div>
            <div class="nutrition-rating-label">
              {{ nutrition.rating }}
            </div>
          </div>
        </ion-item>
      </ion-list>
    </ion-card-content>
  `,
  styleUrls: ['./nutritions-list.component.scss'],
  standalone: true,
  imports: [...componentImports],
})
export class NutritionsListComponent {
  @Input() nutritions: NutritionDto[];

  constructor() {
    addIcons({ ...componentIcons });
  }

  public getNutritionIcon(name: string) {
    return nutritionIcon(name);
  }

  public _getNutritionRatingRecommended(name: string, quantity: number) {
    return isNutritionRatingRecommended(name, quantity);
  }
}
