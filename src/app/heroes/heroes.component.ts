import { Component, OnInit } from '@angular/core';

import { HeroesService } from "./shared/hero.service";
import { Hero } from "./shared/hero.model";
import { MetaData } from "../shared/shared.module";

@Component({
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroesMetaData: MetaData[];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroesMetaData = [
      {value: "universe", text: "Komiksowe Uniwersum"},
      {value: "name", text: "Imie"},
      {value: "secretIdentity", text: "Tozsamosc"},
    ];

    this.heroesService.getAll().subscribe((data: Hero[]) => {
      console.log("data table PAGE", data);
      this.heroes = data;
    });
  }

  onHeroClick(hero: Hero) {
    console.log("data table PAGE, selected:", hero);
  }

}
