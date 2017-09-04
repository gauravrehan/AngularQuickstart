import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit  { 
  name = 'Angular';
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};

heroes : Hero[];

constructor (private heroService: HeroService)
{}

ngOnInit() : void {
  this.getHeroes();
}

getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}

selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

 }
