import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonIcon,
  IonCardTitle,
  IonList,
  IonCardContent,
  IonCardHeader,
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

import { IngredientDto } from 'src/app/shared/models/product';

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
  IonCardTitle,
  IonCardHeader,
];
@Component({
  selector: 'app-ingredients-list',
  template: `
    <ion-card-header>
      <div class="header-info">
        <ion-card-title>Ingredient </ion-card-title>
      </div></ion-card-header
    >
    <ion-card-content>
      <ion-list class="ingredients">
        <ion-item *ngFor="let ingredient of ingredients">
          <div class="ingredient-item">
            <div class="ingredient-infos">
              <ion-label>{{ ingredient.name }}</ion-label>

              <!-- <ion-icon
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
              </ng-template> -->
            </div>
            <div class="ingredient-rating-label">
              {{ ingredient.rating }}
            </div>
          </div>
        </ion-item>
      </ion-list>
    </ion-card-content>
  `,
  styleUrls: ['./ingredients-list.component.scss'],
  standalone: true,
  imports: [...componentImports],
})
export class IngredientsListComponent {
  @Input() ingredients: IngredientDto[];

  constructor() {
    addIcons({ ...componentIcons });
  }

  // public getNutritionIcon(name: string) {
  //   return nutritionIcon(name);
  // }

  // public _getNutritionRatingRecommended(name: string, quantity: number) {
  //   return isNutritionRatingRecommended(name, quantity);
  // }
}
