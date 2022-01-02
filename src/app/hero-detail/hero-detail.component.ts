/* This component receives a Hero object through its hero property and displays it. */

import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()hero?: Hero;

  constructor() { 
  }

  ngOnInit(): void {
  }

}