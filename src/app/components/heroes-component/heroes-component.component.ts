import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'
import { HEROES } from '../../mock-heroes';

@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.css']
})
export class HeroesComponentComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
  
  constructor() { }
  hero: Hero = {
    id: 1,
    name: 'abull kuddus'
  }
  
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  ngOnInit(): void {
  }

}
