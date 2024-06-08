import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { QRCodeModule } from 'angularx-qrcode';
import { AlertController } from '@ionic/angular';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonButton,
    IonCardContent,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    QRCodeModule,
  ],
})
export class ScanPage {
  // qrCodeString = 'this is a secret qr code message';
  //   scannedResult: any;
  //   constructor() {}
  //   startScan() {}
  // }
  // export class ScanPage implements OnInit {
  //   constructor(private alertController: AlertController) {}
  //   barcodes: Barcode[] = [];
  //   isSupported = false;
  //   ngOnInit() {
  //     BarcodeScanner.isSupported().then((result) => {
  //       this.isSupported = result.supported;
  //     });
  //   }
  //   async scan(): Promise<void> {
  //     const granted = await this.requestPermissions();
  //     if (!granted) {
  //       this.presentAlert();
  //       return;
  //     }
  //     const { barcodes } = await BarcodeScanner.scan();
  //     this.barcodes.push(...barcodes);
  //   }
  //   async requestPermissions(): Promise<boolean> {
  //     const { camera } = await BarcodeScanner.requestPermissions();
  //     return camera === 'granted' || camera === 'limited';
  //   }
  //   async presentAlert(): Promise<void> {
  //     const alert = await this.alertController.create({
  //       header: 'Permission denied',
  //       message: 'Please grant camera permission to use the barcode scanner.',
  //       buttons: ['OK'],
  //     });
  //     await alert.present();
  //   }
}
