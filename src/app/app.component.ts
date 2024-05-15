import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonSearchbar,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonApp,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  constructor() {}
}
