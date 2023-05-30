import { Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/services/interface/super-hero';
import { SuperHeroesService } from 'src/app/services/super-heroes.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-super-hero',
  templateUrl: './list-super-hero.component.html',
  styleUrls: ['./list-super-hero.component.scss'],
})
export class ListSuperHeroComponent implements OnInit {
  public pageSize: number = 10;
  public action: boolean = false;
  public superHeroSelected? :SuperHero;

  public superheroes: SuperHero[] = [];
  public pagedSuperheroes: SuperHero[] = [];

  constructor(private _superHeroesService: SuperHeroesService) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this._superHeroesService.getSuperHeroes().subscribe((res: SuperHero[]) => {
      this.superheroes = res;
      const startIndex = 0 * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.pagedSuperheroes = this.superheroes.slice(startIndex, endIndex);
    });
  }

  addSuperHero() {
    this.action = true;
  }

  selectSuperHero(event: SuperHero){
    this.superHeroSelected = event;
  }

  updateAction(){
    this.action = false;
    this.superHeroSelected = undefined
  }

  updateListSuperHero(){
    this.getData()
  }

  searchList(event: SuperHero[]) {
    this.superheroes = event;
    const startIndex = 0 * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedSuperheroes = this.superheroes.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedSuperheroes = this.superheroes.slice(startIndex, endIndex);
  }
}
