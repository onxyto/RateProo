import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonImg,
  IonSearchbar,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-search',
  template: `
    <ion-content color="light">
      <div class="header">
        <h1>Search</h1>
      </div>
      <div>
        <ion-searchbar [debounce]="3000" (ionInput)="handleInput($event)">
        </ion-searchbar>
      </div>
    </ion-content>
  `,
  styles: [
    `
    `,
  ],
  standalone: true,
  imports: [
    IonLabel,
    IonList,
    IonItem,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonSearchbar,
  ],
})
export class ProductSearchPage {

  handleInput(event) {
    const query = event.target.value.toLowerCase();
      console.log('query', query)
  }
}
