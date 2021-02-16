import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getAllHeroes(): import("../model/hero").Hero[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
