import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage, // This is your bottom menu
    children: [
      { 
        path: 'home', 
        loadComponent: () => import('./home/home.page').then(m => m.HomePage) 
      },
      { 
        path: 'photos', 
        loadComponent: () => import('./photos/photos.page').then(m => m.PhotosPage) 
      },
      { 
        path: 'videos', 
        loadComponent: () => import('./videos/videos.page').then(m => m.VideosPage) 
      },
      { 
        path: '', 
        redirectTo: '/tabs/home', 
        pathMatch: 'full' 
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }