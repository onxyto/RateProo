import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonItem,
  IonInput,
  IonLabel, IonList, IonFab, IonFabButton,
} from '@ionic/angular/standalone';
import {IonIcon} from '@ionic/angular/standalone';
import {AlertController} from '@ionic/angular';
import {Barcode, BarcodeScanner} from '@capacitor-mlkit/barcode-scanning';
import {QRCodeModule} from "angularx-qrcode";
import {addIcons} from "ionicons";
import {scan} from "ionicons/icons";
import {Capacitor} from "@capacitor/core";
import {HistoryService} from "../../shared/services/history.service";
import {Subject, takeUntil, tap} from "rxjs";


const componentIcons = {
  scan
}

@Component({
  imports: [
    CommonModule,
    IonLabel,
    IonItem,
    IonButton,
    IonCardContent,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule,
    IonIcon,
    QRCodeModule,
    IonList,
    IonInput,
    IonFab,
    IonFabButton
    // QRCodeModule,
  ],
  selector: 'app-scan',
  template: `
    <ion-content>
      <ion-list>
        <ng-container *ngIf="(barcodes.length !== 0);else noScannedProducts">
          <ion-item *ngFor="let barcode of barcodes">
            <ion-label position="stacked">{{ barcode.format }}</ion-label>
            <ion-input type="text" [value]="barcode.rawValue"></ion-input>
          </ion-item>
        </ng-container>
        <ng-template #noScannedProducts>
          No scanned products yet
        </ng-template>

      </ion-list>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button (click)="scan()">
          <ion-icon name="scan"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <!--<ion-header [translucent]="true">-->
    <!--  <ion-toolbar>-->
    <!--    <ion-title>scan</ion-title>-->
    <!--  </ion-toolbar>-->
    <!--</ion-header>-->

    <!--<ion-content [fullscreen]="true">-->
    <!--  <ion-card class="ion-text-center">-->
    <!--    <ion-card-content>-->
    <!--      <qrcode-->
    <!--        [qrdata]="'this is a secret qr code message'"-->
    <!--        [width]="256"-->
    <!--        [errorCorrectionLevel]="'M'"-->
    <!--      >-->
    <!--      </qrcode>-->
    <!--      <ion-button expand="block" class="ion-margin" (click)="startScan()"-->
    <!--        >scan QR code</ion-button-->
    <!--      >-->
    <!--      <ion-item>-->
    <!--        <ion-label class="ion-text-wrap"-->
    <!--          >Scanner Result : {{scannedResult}}</ion-label-->
    <!--        >-->
    <!--      </ion-item>-->
    <!--    </ion-card-content>-->
    <!--  </ion-card>-->
    <!--</ion-content>-->

  `,
  styleUrls: ['./scan.page.scss'],
  standalone: true
})
export class ScanPage implements OnInit, OnDestroy {
  private historyService = inject(HistoryService);

  private unsubscribe$ = new Subject<void>();
  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertController: AlertController) {
    addIcons({...componentIcons});
  }

  ngOnInit() {
    // BarcodeScanner.isSupported().then((result) => {
    //   this.isSupported = result.supported;
    // });
  }

  async scan(): Promise<void> {
    console.log('here akhi')
    let barcodeList: any[] = [];
    if (!Capacitor.isNativePlatform()) {
      let ean = prompt('6111162000181');
      this.historyService.addProductToUsersHistory(ean).pipe(tap(_ => console.log("SCAN REUSSIE")), takeUntil(this.unsubscribe$)).subscribe();
    } else {
      const granted = await this.requestPermissions();
      if (!granted) {
        await this.presentAlert();
        return;
      }
      const {barcodes} = await BarcodeScanner.scan();
      barcodeList.push(...barcodes);

    }

    this.barcodes.push(...barcodeList);
  }

  async requestPermissions(): Promise<boolean> {
    const {camera} = await BarcodeScanner.requestPermissions();
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
