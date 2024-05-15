import { Routes } from '@angular/router';
import { IddComponent } from 'src/app/idd/idd.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'prdocs-list/:id',
    loadComponent: () =>
      import('./prdocs-list/prdocs-list.component').then(
        (m) => m.PrdocsListComponent
      ),
  },
  {
    path: 'idd/:id',
    component: IddComponent,
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'landing',
    loadComponent: () =>
      import('./landing/landing.page').then((m) => m.LandingPage),
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.page').then((m) => m.SignupPage),
  },
];
