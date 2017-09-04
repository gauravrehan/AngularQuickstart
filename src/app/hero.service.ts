import {Injectable} from '@angular/core';
import {HEROES} from './mock-hero';
import {Hero} from './hero';

@Injectable()
export class HeroService{
    public getHeroes() : Hero[] {
        return HEROES;
    }
}
