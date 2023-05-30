import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListSuperHeroComponent } from './list-super-hero/list-super-hero.component';
import { ListRoutingModule } from './list-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SearchSuperHeroModule } from 'src/app/components/search-super-hero/search-super-hero.module';
import { FormSuperHeroModule } from 'src/app/components/form-super-hero/form-super-hero.module';


@NgModule({
  declarations: [
    ListComponent,
    ListSuperHeroComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    SearchSuperHeroModule,
    FormSuperHeroModule
  ]
})
export class ListModule { }
