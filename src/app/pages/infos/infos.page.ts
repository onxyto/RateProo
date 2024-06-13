import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonAvatar,
  IonItem,
  IonLabel,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCol,
  IonRow,
  IonTabButton,
  IonButton,
  IonGrid,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  logOutSharp,
  logoIonic,
  pieChartOutline,
  personOutline,
} from 'ionicons/icons';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonButton,
    IonTabButton,
    IonRow,
    IonCol,
    IonIcon,
    IonFabButton,
    IonFab,
    IonText,
    IonLabel,
    IonItem,
    IonAvatar,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class InfosPage {
  private authService = inject(AuthService);

  constructor(public route: Router, private navctrl: NavController) {
    addIcons({ logoIonic });
    addIcons({ personOutline });
    addIcons({ heartOutline });
    addIcons({ pieChartOutline });
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
  navigateToBlacklist() {
    this.navctrl.navigateForward('/blacklist', {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
