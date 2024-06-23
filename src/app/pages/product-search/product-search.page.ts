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
import { Product } from 'src/app/shared/models/product';

import { ProductsService } from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-search',
  template: ``,
  styles: [``],
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
  searchTerm: string = '';
  searchResults: Product[] = [];
  constructor(private productsService: ProductsService) {}
}
