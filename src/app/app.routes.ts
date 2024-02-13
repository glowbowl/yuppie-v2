import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/main-page/main-page.component').then((m) => m.MainPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'contact',
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
    path: 'product/:category',
    loadComponent: () =>
      import('./public/product-page/product-page.component').then((m) => m.ProductPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'item/:category/:name',
    loadComponent: () =>
      import('./public/item-page/item-page.component').then((m) => m.ItemPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./public/about-us-page/about-us-page.component').then((m) => m.AboutUsPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./public/policy-page/policy-page.component').then((m) => m.PolicyPageComponent),
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
