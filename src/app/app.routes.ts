import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@wivipro/modules/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('@wivipro/modules/about').then((m) => m.AboutComponent),
  },
  {
    path: 'marriage',
    loadComponent: () =>
      import('@wivipro/modules/marriage').then((m) => m.MarriageComponent),
  },
  {
    path: 'birth',
    loadComponent: () =>
      import('@wivipro/modules/birth').then((m) => m.BirthComponent),
  },
];
