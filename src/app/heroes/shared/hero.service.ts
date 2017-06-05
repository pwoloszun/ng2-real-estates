import { Injectable } from "@angular/core";

import { Hero } from './hero.model';
import { DataApiService } from "../../core/core.module";

@Injectable()
export class HeroesService extends DataApiService<Hero> {
  getUrl(): string {
    return 'assets/server/heroes.json';
  }
}
