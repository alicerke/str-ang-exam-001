import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroesComponent } from '../page/heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {id: 1, name: 'Superman', superPower: 'flying', address: 'Crypton'},
    {id: 2, name: 'Batman', superPower: 'rich', address: 'Gotham'},
    {id: 3, name: 'Wonder Woman', superPower: 'strong', address: 'London'},
    {id: 4, name: 'The Flash', superPower: 'fast moving', address: 'Central City'},
    {id: 5, name: 'Aquaman', superPower: 'breath in water', address: 'Atlantis'}
  ];

  heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.heroes);

  constructor() { }

  getAll(): void {
    this.heroes$.next(this.heroes);
  }
}
