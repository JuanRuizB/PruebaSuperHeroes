import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/services/interface/super-hero';
import { SuperHeroesService } from 'src/app/services/super-heroes.service';

@Component({
  selector: 'app-search-super-hero',
  templateUrl: './search-super-hero.component.html',
  styleUrls: ['./search-super-hero.component.scss'],
})
export class SearchSuperHeroComponent implements OnInit {
  @Output() searchList = new EventEmitter();

  public value = '';

  constructor(private _superHeroesService: SuperHeroesService) {}

  ngOnInit(): void {}

  search() {
    this._superHeroesService
      .getSuperHeroByName(this.value)
      .subscribe((res: SuperHero[]) => {
        this.searchList.emit(res);
      });
  }
}
