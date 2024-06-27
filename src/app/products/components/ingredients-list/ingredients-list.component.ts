import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonIcon,
  IonCardTitle,
  IonList,
  IonCardContent,
  IonCardHeader,
  IonLabel,
  IonButton,
  IonModal,
} from '@ionic/angular/standalone';
import { ellipse, informationCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { IngredientDto } from 'src/app/shared/models/product';
import { ModalController } from '@ionic/angular';
import { IngredientsDetailsComponent } from '../ingredients-details/ingredients-details.component';

const componentIcons = {
  ellipse,

  informationCircleOutline,
};
const componentImports = [
  IonList,
  IonIcon,
  IonCardContent,
  CommonModule,
  IonCardTitle,
  IonCardHeader,
  IonLabel,
  IonButton,
  IonModal,
];
@Component({
  selector: 'app-ingredients-list',
  template: `
    <ion-card-header>
      <div class="header-info">
        <ion-card-title>Ingredients</ion-card-title>
      </div></ion-card-header
    >
    <ion-card-content>
      <ion-list class="ingredients">
        <ion-item *ngFor="let ingredient of ingredients">
          <div class="ingredient-item">
            <div class="ingredient-infos">
              <ion-label class="ingredient-label">{{
                ingredient.name
              }}</ion-label>
            </div>
            <div
              class="ingredient-rating"
              [class]="getIngredientsRatingClass(ingredient.riskRate)"
            >
              <ion-icon name="ellipse"></ion-icon>
              <span class="ingredient-rating-label">{{
                getIngredientsRiskLabel(ingredient.riskRate)
              }}</span>
            </div>
          </div>
          <ion-icon
            class="button-info"
            (click)="openModal(ingredient)"
            slot="end"
            color="primary"
            name="information-circle-outline"
          ></ion-icon>
        </ion-item>
      </ion-list>
    </ion-card-content>
  `,
  styleUrls: ['./ingredients-list.component.scss'],
  standalone: true,
  imports: [...componentImports],
  providers: [ModalController],
})
export class IngredientsListComponent {
  @Input() ingredients: IngredientDto[];

  constructor(private modalCtrl: ModalController) {
    addIcons({ ...componentIcons });
  }

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
  openModal(ingredient: IngredientDto) {
    this.modalCtrl
      .create({
        component: IngredientsDetailsComponent,
        componentProps: {
          ingredientDetails: ingredient,
        },
        initialBreakpoint: 0.25,
        breakpoints: [0, 0.25, 0.5, 0.75],
      })
      .then((modalEl) => modalEl.present());
  }
}
