import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenu,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
  IonIcon,
  IonList,
} from '@ionic/angular/standalone';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  albums,
  albumsOutline,
  albumsSharp,
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  informationOutline,
  informationSharp,
  logOutOutline,
  logOutSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonIcon,
    IonText,
    IonLabel,
    IonAvatar,
    IonItem,
    IonButtons,
    IonContent,
    IonSearchbar,
    IonToolbar,
    AngularFireModule,
    AngularFireAuthModule,
    IonTitle,
    IonHeader,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    ReactiveFormsModule,
    IonMenuButton,
  ],
})
export class AppComponent {
  profile = {
    Username: 'oussamakh',
    email: 'oussamakhettar@gmail.com',
  };
  pages = [
    {
      title: 'blackList',
      url: '/blackList',
      icon: 'albums',
      active: true,
    },
    {
      title: 'home',
      url: '/home',
      icon: 'home',
      active: false,
    },
    {
      title: 'logout',
      url: '/Landing',
      icon: 'log-out',
      active: false,
    },
    {
      title: 'About us',
      url: '/aboutus',
      icon: 'information-circle',
      active: false,
    },
  ];
  constructor() {
    this.addAllIcons();
  }
  addAllIcons() {
    addIcons({
      albumsOutline,
      albumsSharp,
      homeSharp,
      homeOutline,
      logOutSharp,
      logOutOutline,
      informationCircleOutline,
      informationCircleSharp,
    });
  }
}
