import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./layout/layout.module";
import { HomeComponent } from "./home/home.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { CitiesMapComponent } from "./cities-map/cities-map.component";
import { MapSearchComponent } from "./map-search/map-search.component";

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'heroes', component: HeroesComponent},
  {path: 'cities-map', component: CitiesMapComponent},
  {path: 'map-search', component: MapSearchComponent},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
