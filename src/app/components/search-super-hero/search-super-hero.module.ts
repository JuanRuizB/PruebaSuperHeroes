import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchSuperHeroComponent } from './search-super-hero.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchSuperHeroComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    NgIf
  ],
  exports: [
    SearchSuperHeroComponent
  ]
})
export class SearchSuperHeroModule { }
