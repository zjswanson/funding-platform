import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ListPageComponent } from './list-page/list-page.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ListPageComponent
  },
  {
    path: 'charitables',
    component: ListPageComponent
  },
  {
    path: 'ideas',
    component: ListPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
