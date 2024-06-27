import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getRatingClass } from '../../utils';
import { ProductListDto } from '../../models/product';
import { IonIcon, IonImg, IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { ellipse, personCircle, timeOutline } from 'ionicons/icons';

@Component({
  imports: [CommonModule, IonItem, IonImg, IonIcon],
  selector: 'app-product-item',
  template: `
    <ion-item
      (click)="showDetails(product.id)"
      color="light"
      class="product-container"
      [button]="true"
    >
      <div class="product-img">
        <ion-img [src]="product.image_url"></ion-img>
      </div>
      <div class="product-infos">
        <h3>{{ product.title }}</h3>
        <span class="product-name">{{ product.name }}</span>
        <span class="timer">
          <ion-icon name="time-outline"></ion-icon
          ><span>{{ product.created_at | date : 'dd/MM/yyyy' }}</span>
        </span>
        <span [class]="_getRatingClass(product.rating)">
          <ion-icon name="ellipse" class="c"></ion-icon>
          <span>{{ product.rating }}</span>
        </span>
      </div>
    </ion-item>
  `,
  standalone: true,
})
export class ProductItemComponent {
  @Output() showDetailsHandler = new EventEmitter<string>();

  @Input() product: ProductListDto;

  constructor() {
    addIcons({ timeOutline });
    addIcons({ ellipse });
    addIcons({ personCircle });
  }

  public showDetails(id: string) {
    this.showDetailsHandler.emit(id);
  }

  public _getRatingClass(rating: number) {
    return getRatingClass(rating);
  }
}
