import { AuthService } from '../../shared/services/auth.service';
import { lockClosedOutline, personOutline } from 'ionicons/icons';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { Subject, takeUntil, tap } from 'rxjs';

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
export class SignupPage implements OnInit, OnDestroy {
  regForm: FormGroup;

  private unsubscribe$ = new Subject<void>();

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public router: Router
  ) {
    addIcons({ personOutline });
    addIcons({ lockClosedOutline });
  }
  ngOnInit() {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
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
    const { email, password, firstName, lastName } = this.regForm.value;
    const loading = await this.loadingCtrl.create();

    loading.present();
    if (this.regForm?.valid) {
      this.authService
        .registerUser(firstName, lastName, email, password)
        .pipe(
          tap((user) => {
            if (user) {
              loading.dismiss();
              this.router.navigate(['/login']);
            } else {
              console.log('provide correct value');
            }
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
