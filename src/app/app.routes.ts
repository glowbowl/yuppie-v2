import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/main-page/main-page.component').then((m) => m.MainPageComponent),
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
