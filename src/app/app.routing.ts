import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailComponent } from './detail/detail.component';

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
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
