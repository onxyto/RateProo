import { Routes } from '@angular/router';
import { IddComponent } from 'src/app/pages/idd/idd.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomePage } from './pages/home/home.page';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth']);

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/pages/auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./auth/pages/signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: '',
        redirectTo: 'history',
        pathMatch: 'full',
      },
      {
        path: 'products-list',
        loadComponent: () =>
          import('./products/pages/product-list/product-list.page').then(
            (m) => m.ProductListPage
          ),
      },
      {
        path: 'product-details/:id',
        loadComponent: () =>
          import('./products/pages/product-details/product-details.page').then(
            (m) => m.ProductDetailsPage
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history/pages/history-list/history-list.page').then((m) => m.HistoryListPage),
      },
      {
        path: 'scan',
        loadComponent: () =>
          import('./pages/scan/scan.page').then((m) => m.ScanPage),
      },
      {
        path: 'infos',
        loadComponent: () =>
          import('./pages/infos/infos.page').then((m) => m.InfosPage),
      },
      //canActivate: [AuthGuard],
    ],
  },
  {
    path: 'idd/:id',
    component: IddComponent,
  },

  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.page').then((m) => m.LandingPage),
  },

  {
    path: 'resetpassword',
    loadComponent: () =>
      import('./pages/resetpassword/resetpassword.page').then(
        (m) => m.ResetpasswordPage
      ),
  },
  {
    path: 'blacklist',
    loadComponent: () =>
      import('./pages/blacklist/blacklist.page').then((m) => m.BlacklistPage),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./pages/overview/overview.page').then((m) => m.OverviewPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: 'use-info',
    loadComponent: () =>
      import('./pages/use-info/use-info.page').then((m) => m.UseInfoPage),
  },
  {
    path: 'add-products',
    loadComponent: () =>
      import('./pages/add-products/add-products.page').then(
        (m) => m.AddProductsPage
      ),
  },
];
