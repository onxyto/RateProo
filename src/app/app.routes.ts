import { Routes } from '@angular/router';
import { IddComponent } from 'src/app/pages/idd/idd.component';
import { AuthGuard } from '@angular/fire/auth-guard';
import { HomePage } from './pages/home/home.page';

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
        path: 'infos',
        loadComponent: () =>
          import('./pages/infos/infos.page').then((m) => m.InfosPage),
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
          import('./pages/product-search/product-search.page').then((m) => m.ProductSearchPage),
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
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.page').then(
        (m) => m.ProductDetailPage
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
];
