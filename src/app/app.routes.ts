import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Home } from './features/landing/pages/home/home';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home }, 
      { path: 'login', component: Login },
    ],
  }
];
