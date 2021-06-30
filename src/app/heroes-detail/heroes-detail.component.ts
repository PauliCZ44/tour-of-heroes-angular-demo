import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {


  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  @Input() hero?: Hero;

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getOneHero(id).
      subscribe(h => this.hero = h)
    console.log("Id from route: ",id)
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
