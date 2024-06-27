import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from '@ionic/angular/standalone';
import { IngredientDto } from 'src/app/shared/models/product';
import { getRiskRateLabel } from 'src/app/shared/utils';

// const componentIcons = {};
const componentImports = [
  CommonModule,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
];
@Component({
  selector: 'app-ingredients-details',
  template: `
    <ion-card-header>
      <div class="header-info">
        <ion-card-title>{{ ingredientDetails.name }}</ion-card-title>
      </div></ion-card-header
    >
    <ion-content>
      <ion-list>
        <ion-item>
          <div
            class="ingredient-rating"
            [class]="getIngredientsRatingClass(ingredientDetails.riskRate)"
          >
            <ion-icon name="ellipse"></ion-icon>
            <span class="ingredient-rating-label">{{
              getIngredientsRiskLabel(ingredientDetails.riskRate)
            }}</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ion-item-content">
            <h6>Associated Risks</h6>
            <p>
              <span
                *ngFor="
                  let hr of ingredientDetails.healthRisk.split(',');
                  let i = index
                "
              >
                {{ _getRiskRateLabel(hr) }}
                {{
                  i !== ingredientDetails.healthRisk.split(',').length - 1
                    ? ','
                    : ''
                }}
              </span>
            </p>
          </div>
        </ion-item>
        <ion-item>
          <div class="ion-item-content">
            <h6>Details</h6>
            <p>{{ ingredientDetails.description }}</p>
          </div>
        </ion-item>
        <ion-item>
          <div class="ion-item-content">
            <h6>Scientific sources</h6>
            <p>{{ ingredientDetails.scientificSources }}</p>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
  styleUrls: ['./ingredients-details.component.scss'],
  standalone: true,
  imports: [...componentImports],
})
export class IngredientsDetailsComponent {
  @Input() ingredientDetails: IngredientDto;

  getIngredientsRiskLabel(rating: number) {
    const dictionary = {
      1: 'No risk',
      2: 'Low risk',
      3: 'Moderate risk',
      4: 'Hazardous',
    };
    return dictionary[rating];
  }

  getIngredientsRatingClass(rating: number): string {
    const dictionary = {
      1: 'green-rating',
      2: 'yellow-rating',
      3: 'orange-rating',
      4: 'red-rating',
    };
    return dictionary[rating];
  }

  _getRiskRateLabel(riskRate: string) {
    return getRiskRateLabel(riskRate);
  }
}
