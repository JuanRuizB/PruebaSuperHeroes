import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuperHeroComponent } from './list-super-hero.component';

describe('ListSuperHeroComponent', () => {
  let component: ListSuperHeroComponent;
  let fixture: ComponentFixture<ListSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSuperHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
