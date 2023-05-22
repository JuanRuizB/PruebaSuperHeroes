import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuperHero } from './interface/super-hero';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {
  private superHeroes: SuperHero[] = [
    { id: 1, name: 'Spiderman', city: 'Nueva York', superpower: 'Sentido arácnido', age: 25,image: '../../assets/spiderman.jpg' , gender: 'Masculino' },
    { id: 2, name: 'Superman', city: 'Metropolis', superpower: 'Super fuerza', age: 30,image: '../../assets/superman.jpg', gender: 'Masculino' },
    { id: 3, name: 'Mujer Maravilla', city: 'Themyscira', superpower: 'Super velocidad', age: 28,image: '../../assets/wonderwoman.jpg', gender: 'Femenino' },
    // Agrega más superhéroes aquí
  ];

  getSuperHeroes(): Observable<SuperHero[]> {
    return of(this.superHeroes);
  }

  getSuperHeroById(id: number): Observable<SuperHero | undefined> {
    return of(this.superHeroes.find(hero => hero.id === id));
  }

  getSuperHeroByName(name: string): Observable<SuperHero[]> {
    return of(this.superHeroes.filter(hero => hero.name.toLowerCase().includes(name.toLowerCase())));
  }

  updateSuperHero(superHero: SuperHero): Observable<boolean> {
    const index = this.superHeroes.findIndex(hero => hero.id === superHero.id);
    if (index !== -1) {
      this.superHeroes[index] = superHero;
      return of(true);
    }
    return of(false);
  }

  deleteSuperHero(id: number): Observable<boolean> {
    const index = this.superHeroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
      this.superHeroes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}