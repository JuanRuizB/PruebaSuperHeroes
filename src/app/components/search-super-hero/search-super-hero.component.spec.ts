import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuperHeroComponent } from './search-super-hero.component';

describe('SearchSuperHeroComponent', () => {
  let component: SearchSuperHeroComponent;
  let fixture: ComponentFixture<SearchSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSuperHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
