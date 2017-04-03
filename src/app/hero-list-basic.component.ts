/**
 * New typescript file
 */

import { Hero } from './hero';
import { HeroesComponent } from './heroes.component';
import { Input, transition, animate, state, style, trigger, Component, keyframes, group, OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'hero-list-basic',
  styleUrls: ['./heroes.component.css'],
 animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
  ,
  template:
  `
    <ul>
      <li *ngFor="let hero of heroes"
        [@heroState]="hero.state"
        (click)="hero.toggleState()">
        {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListBasicComponent implements OnInit {
  constructor(private heroes:HeroesComponent){}
  heroList:Hero[];
  ngOnInit(): void{
    this.heroes.getHeroes();
  }
}


