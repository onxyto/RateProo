import { AuthService } from '../../shared/services/auth.service';
import { lockClosedOutline, personOutline } from 'ionicons/icons';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonInput,
  IonText,
} from '@ionic/angular/standalone';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonInput,
    IonIcon,
    IonItem,
    IonCardContent,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class SignupPage implements OnInit {
  regForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public AuthService: AuthService,
    public router: Router
  ) {
    addIcons({ personOutline });
    addIcons({ lockClosedOutline });
  }
  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
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
    return this.regForm?.controls;
  }

  async signup() {
    const { email, password } = this.regForm.value;
    const loading = await this.loadingCtrl.create();

    loading.present();
    if (this.regForm?.valid) {
      const user = await this.AuthService.registerUser(email, password);
      loading.dismiss();
      if (user) {
        loading.dismiss();
        this.router.navigate(['/login']);
      } else {
        console.log('provide correct value');
      }
    }
  }
}
