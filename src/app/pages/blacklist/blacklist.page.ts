import { Product } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItemSliding,
  IonList,
  IonItemOptions,
  IonIcon,
  IonItemOption,
  IonLabel,
  IonItem,
  IonBackButton,
  IonButtons,
  IonAvatar,
} from '@ionic/angular/standalone';
import { trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.page.html',
  styleUrls: ['./blacklist.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonItemOption,
    IonIcon,
    IonItemOptions,
    IonList,
    IonItemSliding,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class BlacklistPage {
  constructor() {
    addIcons({ trash });
  }
  onEdit() {
    console.log('trash');
  }
  blacklistProducts = [
    {
      img: 'https://woodsfoodservice.co.uk/media/catalog/product/cache/57f672bc8bb1863d192ed0e81c28e78b/3/a/3ace7ff186351946b63f2083702a839c.jpg',
      title: 'Almond Milk',
      name: 'CHILLED',
      time: '2 weeks ago',
      rating: 'excellent',
      ratingClass: 'c',
    },
    {
      img: 'https://i5.walmartimages.com/seo/CeraVe-Daily-Moisturizing-Face-Body-Lotion-with-Hyaluronic-Acid-for-Normal-to-Dry-Skin-12-oz_fa050fd7-4c62-4694-ac27-d28748a393f8_1.5f6dff2fcb1a5ec2f9b1437aea5dbd6f.jpeg',
      title: 'Body Lotion',
      name: 'CeraVe',
      time: 'yesterday',
      rating: 'excellent',
      ratingClass: 'c',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71gxGnJ4siL.jpg',
      title: 'Whey Protein',
      name: 'Muscle Milk',
      time: 'last week',
      rating: 'excellent',
      ratingClass: 'o',
    },
  ];
  // ngOnInit() {
  // }
}
