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
    path: 'gallery',
    loadComponent: () =>
      import('@wivipro/modules/gallery').then((m) => m.GalleryComponent),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@wivipro/modules/admin').then((mod) => mod.ADMIN_ROUTES),
  },
];
