import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuperHero } from './interface/super-hero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroesService {
  private superHeroes: SuperHero[] = [
    {
      id: 1,
      name: 'Spiderman',
      city: 'Nueva York',
      superpower: 'Sentido arácnido',
      age: 25,
      image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/620-spider-man.jpg',
      gender: 'Hombre',
    },
    {
      id: 2,
      name: 'Superman',
      city: 'Metropolis',
      superpower: 'Super fuerza',
      age: 30,
      image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/644-superman.jpg',
      gender: 'Hombre',
    },
    {
      id: 3,
      name: 'Mujer Maravilla',
      city: 'Themyscira',
      superpower: 'Super velocidad',
      age: 28,
      image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/720-wonder-woman.jpg',
      gender: 'Mujer',
    },
    {
      id: 4,
      name: 'Iron Man',
      city: 'Nueva York',
      superpower: 'Tecnología avanzada',
      age: 40,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/346-iron-man.jpg',
      gender: 'Hombre',
    },
    {
      id: 5,
      name: 'Batman',
      city: 'Gotham',
      superpower: 'Inteligencia y tecnología',
      age: 35,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/69-batman.jpg',
      gender: 'Hombre',
    },
    {
      id: 6,
      name: 'Hulk',
      city: 'Desconocida',
      superpower: 'Super fuerza',
      age: 38,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/332-hulk.jpg',
      gender: 'Hombre',
    },
    {
      id: 7,
      name: 'Thor',
      city: 'Asgard',
      superpower: 'Control del trueno',
      age: 1000,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/659-thor.jpg',
      gender: 'Hombre',
    },
    {
      id: 8,
      name: 'Flash',
      city: 'Central City',
      superpower: 'Super velocidad',
      age: 28,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/263-flash.jpg',
      gender: 'Hombre',
    },
    {
      id: 9,
      name: 'Black Widow',
      city: 'Stalingrado',
      superpower: 'Experta en combate',
      age: 35,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/107-black-widow.jpg',
      gender: 'Mujer',
    },
    {
      id: 10,
      name: 'Wonder Man',
      city: 'Los Angeles',
      superpower: 'Fuerza sobrehumana',
      age: 32,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/719-wonder-man.jpg',
      gender: 'Hombre',
    },
    {
      id: 11,
      name: 'Captain America',
      city: 'Nueva York',
      superpower: 'Super soldado',
      age: 95,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/149-captain-america.jpg',
      gender: 'Hombre',
    },
    {
      id: 12,
      name: 'Aquaman',
      city: 'Atlantis',
      superpower: 'Control del agua',
      age: 42,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/38-aquaman.jpg',
      gender: 'Hombre',
    },
    {
      id: 13,
      name: 'Black Panther',
      city: 'Wakanda',
      superpower: 'Fuerza y agilidad mejoradas',
      age: 35,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/106-black-panther.jpg',
      gender: 'Hombre',
    },
    {
      id: 14,
      name: 'Catwoman',
      city: 'Gotham City',
      superpower: 'Agilidad y sigilo',
      age: 33,
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/165-catwoman.jpg',
      gender: 'Mujer',
    },
    // Agrega más superhéroes aquí
  ];

  getSuperHeroes(): Observable<SuperHero[]> {
    return of(this.superHeroes);
  }

  getSuperHeroById(id: number): Observable<SuperHero | undefined> {
    return of(this.superHeroes.find((hero) => hero.id === id));
  }

  getSuperHeroByName(name: string): Observable<SuperHero[]> {
    return of(
      this.superHeroes.filter((hero) =>
        hero.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }

  createSuperHero(superHero: SuperHero): Observable<boolean> {
    this.superHeroes.unshift(superHero);
    return of(true)
  }

  updateSuperHero(superHero: SuperHero): Observable<boolean> {
    const index = this.superHeroes.findIndex(
      (hero) => hero.id === superHero.id
    );
    if (index !== -1) {
      this.superHeroes[index] = superHero;
      return of(true);
    }
    return of(false);
  }

  deleteSuperHero(id: number): Observable<boolean> {
    const index = this.superHeroes.findIndex((hero) => hero.id === id);
    if (index !== -1) {
      this.superHeroes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
