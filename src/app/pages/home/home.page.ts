import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonListHeader,
  IonItem,
  IonButton,
  IonList,
  IonContent,
  IonIcon,
  IonSearchbar,
  IonInput,
  IonFab,
  IonFabButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { ProductsService } from '../../shared/services/products.service';
import { RouterLink } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  barcodeOutline,
  bookOutline,
  libraryOutline,
  personOutline,
  searchOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonTabButton,
    IonTabBar,

    IonTabs,
    IonTabs,
    CommonModule,
    IonFabButton,
    IonFab,
    IonInput,
    IonSearchbar,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButton,
    IonLabel,
    IonItem,
    IonListHeader,
    IonList,
    IonTitle,
    IonContent,
    RouterLink,
    IonMenuButton,
  ],
})
export class HomePage implements OnInit {
  isSupported = false;

  barcodes: Barcode[] = [];

  private authService = inject(AuthService);

  constructor(private alertController: AlertController, public route: Router) {
    addIcons({
      libraryOutline,
      bookOutline,
      barcodeOutline,
      searchOutline,
      personOutline,
    });
  }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async logout() {
    try {
      const logout = await this.authService.signOut();
      console.log('done');
      this.route.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
