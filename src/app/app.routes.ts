import { Routes } from '@angular/router';
import { IddComponent } from 'src/app/pages/idd/idd.component';
import { AuthGuard } from '@angular/fire/auth-guard';
import { HomePage } from './pages/home/home.page';
import { ScanPage } from './pages/scan/scan.page';
import { HistoryPage } from './pages/history/history.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'scan',
        loadComponent: () =>
          import('./pages/scan/scan.page').then((m) => m.ScanPage),
      },

      {
        path: 'history',
        loadComponent: () =>
          import('./pages/history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'recs',
        loadComponent: () =>
          import('./pages/recs/recs.page').then((m) => m.RecsPage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.page').then((m) => m.SearchPage),
      },
      //canActivate: [AuthGuard],
    ],
  },
  {
    path: 'prdocs-list',
    loadComponent: () =>
      import('./pages/prdocs-list/prdocs-list.component').then(
        (m) => m.PrdocsListComponent
      ),
  },
  {
    path: 'idd/:id',
    component: IddComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.page').then((m) => m.LandingPage),
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'resetpassword',
    loadComponent: () =>
      import('./pages/resetpassword/resetpassword.page').then(
        (m) => m.ResetpasswordPage
      ),
  },
];
