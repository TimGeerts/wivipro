import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const ADMIN_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];
