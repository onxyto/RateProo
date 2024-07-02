import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getRatingClass } from '../../utils';
import { ProductListDto } from '../../models/product';
import {
  IonIcon,
  IonImg,
  IonItem,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  archive,
  ellipse,
  heart,
  personCircle,
  timeOutline,
  trash,
} from 'ionicons/icons';

@Component({
  imports: [
    CommonModule,
    IonItem,
    IonImg,
    IonIcon,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
  ],
  selector: 'app-product-item',
  template: `
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success">
          <ion-icon slot="icon-only" name="archive"></ion-icon>
        </ion-item-option>
      </ion-item-options>

      <ion-item
        (click)="showDetails(product.id)"
        color="light"
        class="product-container"
        [button]="true"
      >
        <div class="product-content">
          <div class="product-img">
            <ion-img [src]="product.image_url"></ion-img>
          </div>
          <div class="product-infos">
            <h3>{{ product.title }}</h3>
            <span class="product-name">{{ product.name }}</span>
            <div class="timer">
              <ion-icon name="time-outline"></ion-icon
              ><span>{{ product.created_at | date : 'dd/MM/yyyy' }}</span>
            </div>
            <div [class]="_getRatingClass(product.rating)">
              <ion-icon name="ellipse" class="c"></ion-icon>
              <span>{{ product.rating }}</span>
            </div>
          </div>
        </div>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option (click)="favorite(product.id)">
          <ion-icon slot="icon-only" name="heart"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" (click)="delete(product.id)">
          <ion-icon slot="icon-only" name="trash"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  `,
  styleUrls: ['./product-item.component.scss'],
  standalone: true,
})
export class ProductItemComponent {
  @Output() showDetailsHandler = new EventEmitter<string>();
  @Output() favoriteHandler = new EventEmitter<string>();
  @Output() deleteHandler = new EventEmitter<string>();

  @Input() product: ProductListDto;

  constructor() {
    addIcons({ timeOutline, archive, ellipse, personCircle, heart, trash });
  }

  public showDetails(id: string) {
    this.showDetailsHandler.emit(id);
  }

  public _getRatingClass(rating: number) {
    return getRatingClass(rating);
  }

  public favorite(id: string) {
    this.favoriteHandler.emit(id);
  }

  public delete(id: string) {
    this.deleteHandler.emit(id);
  }
}
