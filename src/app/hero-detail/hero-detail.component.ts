/* This component receives a Hero object through its hero property and displays it. */

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //holds information about the route to the specific instance of the component
import { Location } from '@angular/common'; //Angular service for interacting with the browser

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
    private messageService: MessageService
  ) { 
    this.messageService.add('Hero Detail Component: Component Created');
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    console.dir(this.route.snapshot);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}