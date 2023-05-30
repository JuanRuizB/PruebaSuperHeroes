import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ListSuperHeroComponent } from './list-super-hero/list-super-hero.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  children: [
    {
      path: 'listSuperHero',
      component: ListSuperHeroComponent
    },
    {
        path: '',
        redirectTo: 'listSuperHero',
        pathMatch: 'full',
      },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
