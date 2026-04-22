import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Home } from './features/landing/pages/home/home';
import { MainLayout } from './layout/main-layout/main-layout';
import { DownloadForm } from './features/landing/pages/download-form/download-form';
import { CompanyUpdates } from './features/landing/pages/company-updates/company-updates';
import { Announcement } from './features/landing/pages/announcement/announcement';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home }, 
      { path: 'login', component: Login },
      { path: 'download-form', component: DownloadForm },
      { path: 'company-updates', component: CompanyUpdates },
      { path: 'announcements', component: Announcement },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
