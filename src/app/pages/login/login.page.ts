import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonIcon,
  IonCard,
  IonCardContent,
  IonButton,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { logoIonic, personOutline, lockClosedOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonLabel,
    IonButton,
    IonCardContent,
    IonCard,
    IonIcon,
    IonInput,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class LoginPage implements OnInit {
  LogForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public router: Router
  ) {
    addIcons({ logoIonic });
    addIcons({ personOutline });
    addIcons({ lockClosedOutline });
  }
  ngOnInit() {
    this.LogForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          // Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[0-8])(?=,*[A-Z])'),
        ],
      ],
    });
  }
  get errorControl() {
    return this.LogForm?.controls;
  }

  async login() {
    const { email, password } = this.LogForm.value;
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.LogForm?.valid) {
      try {
        const user = await this.authService.loginUser(email, password);
        loading.dismiss();
        if (user) {
          loading.dismiss();
          this.router.navigate(['/home/history']);
        } else {
          console.log('provide correct value');
        }
      } catch (error) {
        loading.dismiss();
      }
    }
  }
}
