import { Component, OnInit } from '@angular/core';

import { RealEstate } from "./shared/real-estate.model";
import { MetaData } from "../shared/shared.module";

@Component({
  templateUrl: "./map-search.component.html",
  providers: [],
})
export class MapSearchComponent implements OnInit {

  listHeaders: MetaData[];

  ngOnInit() {
    this.listHeaders = [
      {value: "street", text: "Ulica"},
      {value: "lat", text: "Wysokosc geo."},
      {value: "lng", text: "Dlugosc geo."},
    ];
    // TODO
  }

  onRealEstateClick(realEstate: RealEstate) {
    // TODO
  }

}
