import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonIcon,
  IonFab,
  IonButton,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonFab,
    IonIcon,
    IonInput,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class ResetpasswordPage {
  email: any;
  constructor(public route: Router, public authService: AuthService) {}

  async resetPassword() {
    this.authService.resetPassword(this.email).then(() => {
      console.log('reset link sent');
      this.route.navigate(['/login']);
    });
  }
}
