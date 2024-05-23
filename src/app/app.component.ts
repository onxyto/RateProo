import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/angular/standalone';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonSearchbar,
    IonToolbar,
    AngularFireModule,
    AngularFireAuthModule,
    IonTitle,
    IonHeader,
    IonApp,
    IonRouterOutlet,
    ReactiveFormsModule,
  ],
})
export class AppComponent {
  constructor() {}
}
