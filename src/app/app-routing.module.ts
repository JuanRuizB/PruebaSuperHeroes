import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: 'pages',
      loadChildren: () => import('./pages/pages.module')
        .then(m => m.PagesModule),
    },
    {
      path: '',
      redirectTo: 'pages',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
