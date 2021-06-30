import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  selectedHero?: Hero;
  
  constructor(private heroService :HeroService, public messageServ: MessageService) { }

  ngOnInit(): void {
    console.log("OnInit")
    this.getHeroes()
  }


  getHeroes(): void {
    console.log("getting heroes")
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

    add(name: string): void {
      name = name.trim();
      console.log("Adding", name)
      if (!name) {
        this.messageServ.add("name must not be empty")
        return;
       }
      this.heroService.addHero({ name } as Hero)
        .subscribe( (hero: Hero) => {
          this.heroes.push(hero);
        });
    }

  delete(hero: Hero): void {
    console.log("delete", hero)
    this.heroes = this.heroes.filter(h => h.id !== hero.id)
    this.heroService.deleteHero(hero).subscribe();
  }
}
