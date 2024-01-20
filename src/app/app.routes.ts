import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/main-page/main-page.component').then((m) => m.MainPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./public/location-page/location-page.component').then((m) => m.LocationPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'cooperation',
    loadComponent: () =>
      import('./public/cooperation-page/cooperation-page.component').then((m) => m.CooperationPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./public/product-page/product-page.component').then((m) => m.ProductPageComponent),
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
