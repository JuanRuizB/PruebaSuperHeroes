import { TestBed } from '@angular/core/testing';

import { SuperHeroesService } from './super-heroes.service';

describe('SuperHeroesService', () => {
  let service: SuperHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should get all superheroes', (done) => {
    service.getSuperHeroes().subscribe((superHeroes) => {
      expect(superHeroes.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should get a specific superhero by id', (done) => {
    const superheroId = 1;
    service.getSuperHeroById(superheroId).subscribe((superHero) => {
      expect(superHero).toBeDefined();
      expect(superHero?.id).toBe(superheroId);
      done();
    });
  });

  it('should get superheroes by name', (done) => {
    const searchName = 'man';
    service.getSuperHeroByName(searchName).subscribe((superHeroes) => {
      expect(superHeroes.length).toBeGreaterThan(0);
      superHeroes.forEach((superHero) => {
        expect(superHero.name.toLowerCase()).toContain(searchName);
      });
      done();
    });
  });

  it('should update a superhero', (done) => {
    const superheroId = 1;
    const updatedSuperHeroData = {
      id: 0,
      name: 'Updated Hero',
      city: 'Updated City',
      superpower: 'Updated Superpower',
      age: 30,
      image: 'UpdatedHero.jpg',
      gender: 'Male',
    };
    service.updateSuperHero(updatedSuperHeroData).subscribe((response) => {
      expect(response).toBeTruthy();
      done();
    });
  });

  it('should delete a superhero', (done) => {
    const superheroId = 1;
    service.deleteSuperHero(superheroId).subscribe((response) => {
      expect(response).toBeTruthy();
      done();
    });
  });
});
