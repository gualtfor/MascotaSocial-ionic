import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
      { path: 'photos', loadComponent: () => import('./photos/photos.page').then(m => m.PhotosPage) },
      { path: 'videos', loadComponent: () => import('./videos/videos.page').then(m => m.VideosPage) },
      { path: 'profile', loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage) },
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
    ]
  },
  { 
    path: 'edit-profile', 
    loadComponent: () => import('./edit-profile/edit-profile.page').then(m => m.EditProfilePage) 
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];