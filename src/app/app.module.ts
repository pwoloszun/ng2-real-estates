import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { CitiesMapComponent } from "./cities-map/cities-map.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MapSearchComponent } from "./map-search/map-search.component";
import { SharedModule } from "./shared/shared.module";
// TODO: some components

import { RealEstatesService } from "./map-search/shared/real-estates.service";
import { HeroesService } from "./heroes/shared/hero.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // core
    CoreModule,
    SharedModule,
    // routing IMPORTANT: order matters!
    LayoutModule,
    AppRoutingModule,
  ],
  declarations: [
    HomeComponent,
    CitiesMapComponent,
    HeroesComponent,
    MapSearchComponent,
    AppComponent
  ],
  providers: [
    RealEstatesService,
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
